import { getSupabaseServer } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabaseServer();

    const { count: totalProducts } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true });

    // Get total orders count
    const { count: totalOrders } = await supabase
      .from("orders")
      .select("*", { count: "exact", head: true });

    // Get total users count
    const { count: totalUsers } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true });

    // Get total revenue
    const { data: orders } = await supabase
      .from("orders")
      .select("total_amount")
      .eq("status", "completed");

    const totalRevenue =
      orders?.reduce((sum, order) => sum + (order.total_amount || 0), 0) || 0;

    // Get recent orders
    const { data: recentOrders } = await supabase
      .from("orders")
      .select("id, order_number, total_amount, status, created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    // Get top products
    const { data: topProducts } = await supabase
      .from("order_items")
      .select(`
        product_id,
        quantity,
        products(id, name)
      `)
      .order("quantity", { ascending: false })
      .limit(10);

    // Group top products
    const productSales: {
      [key: string]: { id: string; name: string; sales: number };
    } = {};

    topProducts?.forEach((item: any) => {
      const productId = item.product_id;
      if (productId in productSales) {
        productSales[productId].sales += item.quantity || 0;
      } else {
        productSales[productId] = {
          id: item.products?.id || productId,
          name: item.products?.name || "Unknown",
          sales: item.quantity || 0,
        };
      }
    });

    const topProductsList = Object.values(productSales).sort(
      (a, b) => b.sales - a.sales
    );

    return NextResponse.json({
      totalProducts: totalProducts || 0,
      totalOrders: totalOrders || 0,
      totalRevenue,
      totalUsers: totalUsers || 0,
      recentOrders: recentOrders || [],
      topProducts: topProductsList || [],
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats" },
      { status: 500 }
    );
  }
}