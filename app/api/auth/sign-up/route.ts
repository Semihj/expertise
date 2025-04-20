import User from "@/models/userSchema";
import { connectMongoDb } from "@/mongodb/connect";
import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs"



export const POST = async (req) => {
    await connectMongoDb()
    const data = await req.json();
    const hashedPassword = bcryptjs.hashSync(data.password,10)
    try {
        const res = await User.create({
            name:data.name,
            password:hashedPassword
        })
        if(res) {
            return NextResponse.json(res)
        } else {
            return NextResponse.json({error:"Error creating User"})
        }
    } catch (error) {
        return NextResponse.json("something went wrong")
    }
}