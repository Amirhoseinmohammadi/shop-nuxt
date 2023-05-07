
import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxcXB2YXNqcWVmcHZpcXNkdHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MDM0ODEsImV4cCI6MTk5ODE3OTQ4MX0.ynnGnw9wsQXnbZHniUOTgb1HS5fzfe9ml-GF-JC2arM";
const SUPABASE_URL = "https://gqqpvasjqefpviqsdtzy.supabase.co";

const useSupabase = () =>{
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

    return {
        supabase,
    }
};

export default useSupabase;