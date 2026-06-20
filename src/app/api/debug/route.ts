import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    env: {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ Set" : "✗ Missing",
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✓ Set" : "✗ Missing",
      serviceKey: process.env.NEXT_PUBLIC_SECRET_KEY ? "✓ Set" : "✗ Missing",
      appUrl: process.env.NEXT_PUBLIC_APP_URL || "Not set",
    },
  });
}