import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const payload = {
      name: body?.name || "",
      email: body?.email || "",
      message: body?.message || "",
      phone: body?.phone || "",
      category_name: body?.category_name || "",
    };

    const response = await fetch(
      `${process.env.VITE_SUPABASE_URL}/rest/v1/contact_us`,
      {
        method: "POST",
        headers: {
          apikey: process.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${process.env.VITE_SUPABASE_API_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: errorText || "Failed to submit form." },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unexpected server error." },
      { status: 500 }
    );
  }
}
