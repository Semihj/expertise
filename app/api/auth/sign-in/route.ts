import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import { connectMongoDb } from "@/mongodb/connect";

export const POST = async (req) => {
    try {
      // Connect to MongoDB
      await connectMongoDb();
  
      // Parse request body as JSON
      const data = await req.json();
  
      // Find user by name
      const validUser = await User.findOne({ name: {$regex:data.name,$options:"i"}});
  
      // Check if user exists
      if (!validUser) {
        return NextResponse.json({ message: "User Not Found" });
      }
  
      // Compare passwords asynchronously (using bcryptjs.compare)
      const passwordMatch = await bcryptjs.compare(data.password, validUser.password);
  
      // Check password validity
      if (!passwordMatch) {
        return NextResponse.json({ message: "Wrong Password" });
      }
  
      // Successful login: Return user data
      return NextResponse.json({ data: validUser });
    } catch (error) {
      console.error(error); // Log the error for debugging
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  };