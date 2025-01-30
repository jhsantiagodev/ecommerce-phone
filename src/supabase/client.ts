import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase";

const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabaseURL = import.meta.env.VITE_PROJECT_URL_SUPABASE;

export const supabase = createClient<Database>(supabaseURL, supabaseKey);
