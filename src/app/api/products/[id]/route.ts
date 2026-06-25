import { getSupabaseServer } from '@/lib/supabase-server';
import { createClient } from '@supabase/supabase-js'


// GET single product
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = getSupabaseServer();
    const { id } = await params

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error

    return Response.json({ data })
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const supabase = getSupabaseServer();
    const { data, error } = await supabase
      .from('products')
      .update(body)
      .eq('id', id)
      .select()

    if (error) throw error

    return Response.json({ data })
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

// DELETE product
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = getSupabaseServer();
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (error) throw error

    return Response.json({ message: 'Product deleted' })
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}