import { NextResponse } from "next/server";
import { mockUsers } from "@/data/mockUsers";

export async function POST(req) {
    const { email, password } = await req.json();

    // Check if user exists
    const user = mockUsers.find(
        (user) => user.email === email && user.password === password
    );

    if (!user) {
        return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
        );
    }

    return NextResponse.json({ message: "Login successful", user });
}
