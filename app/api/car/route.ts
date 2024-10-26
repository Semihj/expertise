import Car from "@/models/schema";
import { connectMongoDb } from "@/mongodb/connect";
import { PAGES_DIR_ALIAS } from "next/dist/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
  await connectMongoDb();
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get('limit') || "9";
  const plaka = searchParams.get('plaka') || "" ;
  const marka = searchParams.get('marka') || "" ;
  const page = searchParams.get('page') || 0 ;
  
  const totalCars = await Car.countDocuments({
    marka: { $regex: marka, $options: 'i' },
    plaka: { $regex: plaka, $options: 'i' }
  });
  
  const data = await Car.find({
    marka: { $regex: marka, $options: 'i' },
    plaka: { $regex: plaka, $options: 'i' }
  })
    .sort({ ["updatedAt"]: "desc" })
    .limit(parseInt(limit))
    .skip(parseInt((page - 1) * limit));
  if (data) {
    return NextResponse.json({carsLength:totalCars,data:data});
  } else {
    return NextResponse.json("Something went wrong");
  }
};

export const POST = async (req: any) => {
  await connectMongoDb();
  const data = await req.json();
  const car = await Car.create(data);
  if (car) {
    return NextResponse.json(car);
  } else {
    return NextResponse.json("Something went wrong");
  }
};
