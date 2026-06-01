import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sebnlljkdgbxibsekcro.supabase.co";
const supabaseKey = "sb_publishable_HaQfkLYyFIBU3w8S-nS_AA_9F4DIcO2";

export const supabase = createClient(supabaseUrl, supabaseKey);
