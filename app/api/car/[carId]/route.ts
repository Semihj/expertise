
import Car from '@/models/schema';
import { connectMongoDb } from '@/mongodb/connect';
import { AnyARecord } from 'dns';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest,context:any) => {
  const query = request.nextUrl.pathname.split('/').filter(Boolean);
  const {params} = context  
    try {
        await connectMongoDb();

        if (!params.carId) {
            return NextResponse.json({ message: "Car ID is required" }, { status: 400 });
        } else { 

        const car = await Car.findById(params.carId);
        if (!car) {
            return NextResponse.json({ message: "Car not found" }, { status: 404 });
        } else {
            return NextResponse.json(car, { status: 200 });
        }
}
        
    } catch (error) {
        console.error("Error fetching car:", error);
        return NextResponse.json({ message: "An error occurred while fetching the car" }, { status: 500 });
    }
};

export const DELETE = async (req:NextRequest,context:any) => {
  const {params} = context  

  try {
    await connectMongoDb()
    if(!params.carId) {
        return NextResponse.json({ message: "Car ID is required" }, { status: 400 });

    } else {
        await Car.findByIdAndDelete(params.carId);
        return NextResponse.json({ message: "Car deleted successfully" })
    }
  } catch (error) {
    console.log(error);
    
  }

}

export const PATCH = async (req:NextRequest,context:any) => {

    const {params} = context;
    const data = await req.json();
    const car = await Car.findById(params.carId);

    try {
        const updatedCar = {car,...data}
       const update = await Car.findByIdAndUpdate(params.carId,updatedCar,{new:true})
        if(update) {
            return NextResponse.json(update)
        } else {
            return NextResponse.json("Something went wrong")
        }
    } catch (error) {
        console.log(error);
        
    }
}