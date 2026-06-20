import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! 
)

// GET all products
export async function GET(request: Request) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')

    if (error) throw error

    return Response.json({ data })
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

// POST - Create product
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { data, error } = await supabase
      .from('products')
      .insert([body])
      .select()

    if (error) throw error

    return Response.json({ data }, { status: 201 })
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}