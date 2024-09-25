import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"



export const GET = async (res, req) => {
    try {
        const client = await clientPromise
        const db = client.db('mydatabase')
        const menu = db.collection('menu').insertOne()

        return NextResponse.json({success: true, data: menu, message: "got menu"})

    } catch (e) {
        return NextResponse.json({success: false, message: e.message })
    }
}
export const POST = async (res, req) => {

}
