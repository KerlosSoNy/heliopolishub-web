import { createClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )


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