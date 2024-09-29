import clientPromise from "../../../lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db('mydatabase');
        const categories = await db.collection('categories').find().toArray();

        return NextResponse.json({ success: true, data: categories, message: "got categories" });
    } catch (e: any) {
        console.error("GET Error:", e);
        return NextResponse.json({ success: false, message: e.message }, { status: 400 });
    }
}

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("mydatabase");
        const body = await req.json();

        console.log("Body received:", body);

        const result = await db.collection("categories").insertOne(body);

        return NextResponse.json({ success: true, message: "categories item added", result });
    } catch (e: any) {
        console.error("POST Error:", e);
        return NextResponse.json({ success: false, message: e.message }, { status: 500 });
    }
};