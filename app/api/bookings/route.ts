import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

// POST /api/bookings
// Body: { room_id, guest_name, guest_email, guest_phone?, check_in, check_out, guests, message? }
// Returns: { booking } on success, { error, suggestions } if dates overlap
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { room_id, guest_name, guest_email, guest_phone, check_in, check_out, guests, message } = body;

  if (!room_id || !guest_name || !guest_email || !check_in || !check_out) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (check_in >= check_out) {
    return Response.json({ error: "check_out must be after check_in" }, { status: 400 });
  }

  // Check for overlapping bookings on the same room
  // Overlap condition: existing.check_in < new.check_out AND existing.check_out > new.check_in
  const { data: overlapping, error: overlapError } = await supabase
    .from("bookins")
    .select("check_in, check_out")
    .eq("room_id", room_id)
    .in("status", ["pending", "confirmed"])
    .lt("check_in", check_out)
    .gt("check_out", check_in);

  if (overlapError) {
    return Response.json({ error: overlapError.message }, { status: 500 });
  }

  if (overlapping && overlapping.length > 0) {
    // Find suggestions: other rooms available for those dates
    const suggestions = await findAvailableRooms(check_in, check_out, room_id);
    return Response.json(
      {
        error: "unavailable",
        message: "This room is already booked for those dates.",
        conflicting: overlapping,
        suggestions,
      },
      { status: 409 }
    );
  }

  // All clear — create the booking
  const { data: booking, error: insertError } = await supabase
    .from("bookins")
    .insert({
      room_id,
      guest_name,
      guest_email,
      guest_phone: guest_phone || null,
      check_in,
      check_out,
      guests: guests || 1,
      message: message || null,
      status: "pending",
    })
    .select()
    .single();

  if (insertError) {
    return Response.json({ error: insertError.message }, { status: 500 });
  }

  return Response.json({ booking }, { status: 201 });
}

// Find all OTHER rooms that are free for the requested dates
async function findAvailableRooms(checkIn: string, checkOut: string, excludeRoomId: string) {
  // Get all room IDs that have conflicting bookings in that window
  const { data: busyRooms } = await supabase
    .from("bookins")
    .select("room_id")
    .in("status", ["pending", "confirmed"])
    .lt("check_in", checkOut)
    .gt("check_out", checkIn);

  const busyRoomIds = new Set((busyRooms || []).map((b) => b.room_id));

  // All known room IDs (must match room slugs in the codebase)
  const allRoomIds = [
    "single-mountain-view",
    "double-room",
    "deluxe-double-balcony",
    "deluxe-twin-balcony",
    "double-twin-terrace",
  ];

  return allRoomIds.filter((id) => id !== excludeRoomId && !busyRoomIds.has(id));
}
