"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import main from "@/public/main.png";
import skeleton from "@/public/skeleton.png";
import motor from "@/public/motor.png";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import AdminCarPage from "./_components/AdminCarPage";
import UserCarPage from "./_components/UserCarPage";

const url = process.env.NEXT_DEV_URL || "http://localhost:3000";

export default function CarPage() {
  const [carData, setCarData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  console.log(carData);
  const router = useRouter();

  const getCar = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/car/${params.id}`, {
        method: "GET",
      });
      const data = await res.json();
      setIsLoading(false);
      setCarData(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCar();
  }, []);

  const handleDeleteCar = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/car/${params.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data) {
        router.push("/");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full px-20 py-10 flex  ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="">
          {user._id ? (
          <AdminCarPage carData={carData} handleDeleteCar={handleDeleteCar} />
          ) : (
            <UserCarPage carData={carData} />
          )}
        </div>
      )}
    </div>
  );
}
