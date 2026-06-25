import { getSupabaseServer } from '@/lib/supabase-server';

export async function GET(request: Request) {
  try {
    const supabase = getSupabaseServer();
    // Simple connection test
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      return Response.json({ error: error.message }, { status: 400 })
    }

    return Response.json({ 
      message: "✅ Connected to Supabase successfully!",
      session: data.session
    })
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 })
  }
}