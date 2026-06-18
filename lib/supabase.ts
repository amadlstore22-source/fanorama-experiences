import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Booking = {
  id: number;
  room_id: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string | null;
  check_in: string;   // "YYYY-MM-DD"
  check_out: string;  // "YYYY-MM-DD"
  guests: number;
  message: string | null;
  status: "pending" | "confirmed" | "cancelled";
  created_at: string;
};
