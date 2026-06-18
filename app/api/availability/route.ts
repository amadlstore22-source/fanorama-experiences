import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

// GET /api/availability?room_id=double-room
// Returns all confirmed/pending bookings for a room so the calendar can grey them out
export async function GET(request: NextRequest) {
  const roomId = request.nextUrl.searchParams.get("room_id");

  if (!roomId) {
    return Response.json({ error: "room_id is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("bookings")
    .select("check_in, check_out")
    .eq("room_id", roomId)
    .in("status", ["pending", "confirmed"])
    .gte("check_out", new Date().toISOString().split("T")[0]); // only future bookings

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ bookings: data });
}
