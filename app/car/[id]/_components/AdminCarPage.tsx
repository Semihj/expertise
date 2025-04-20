"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import main from "@/public/main.png"
import skeleton from "@/public/skeleton.png"
import motor from "@/public/motor.png"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { FaTrash } from "react-icons/fa";


import { Button } from '@/components/ui/button';

export default function AdminCarPage({carData,handleDeleteCar}:{carData:any,handleDeleteCar:any}) {

    const params = useParams()

  return (
    <div className="flex flex-col gap-5 w-full ">
    <div className="w-full flex items-center justify-between ">
      <h1 className="font-bold text-2xl "> {carData.marka} </h1>
      <span className="font-semibold text-lg ">
        {" "}
        Alıcı Adı:{" "}
        <span className="font-normal"> {carData.alıcı_ad} </span>{" "}
      </span>
      <span className="font-semibold text-lg ">
        {" "}
        Model:{" "}
        <span className="font-normal">
          {" "}
          {carData.model_yıl}{" "}
        </span>{" "}
      </span>
      <span className="font-semibold text-lg ">
        {" "}
        Alıcı Tel:{" "}
        <span className="font-normal">
          {" "}
          {carData.alıcı_tel}{" "}
        </span>{" "}
      </span>

      <span className="font-semibold text-lg ">
        {" "}
        Araç Giriş Tarihi:{" "}
        <span className="font-normal">
          {" "}
          {carData.arac_giris_tarih}{" "}
        </span>{" "}
      </span>
    </div>
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col min-w-[300px] bg-black text-white w-[30%] border rounded-md min-h-[300px]">
        <Link href={`/car/${params.id}/main`} className="">
          <Image
            src={main}
            alt="main"
            width={200}
            height={200}
            sizes="100vw"
            className="w-full h-full max-w-[500px] max-h-[280px]  rounded-t-md object-cover object-center "
          />
        </Link>
        <div className="mb-10 p-4">
          <Link
            href={`/car/${params.id}/main`}
            className="text-2xl font-bold"
          >
            Ana Bilgiler Sayfası
          </Link>
          <div className="flex gap-4 w-full h-full justify-end ">
            <Link href={`/update/${params.id}/main`}>
              <Button className="font-semibold ">Düzenle</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-[300px] bg-black text-white w-[30%] border rounded-md min-h-[300px]">
        <Link href={`/car/${params.id}/tech_notes`} className="">
          <Image
            src={skeleton}
            alt="main"
            width={200}
            height={200}
            sizes="100vw"
            className="w-full h-full max-w-[500px] max-h-[280px] rounded-t-md object-cover object-center "
          />
        </Link>
        <div className="mb-10 p-4">
          <Link
            href={`/car/${params.id}/tech_notes`}
            className="text-2xl font-bold"
          >
            Teknisyen Notları
          </Link>
          <div className="flex gap-4 w-full h-full justify-end ">
            <Link href={`/update/${params.id}/tech_notes`}>
              <Button className="font-semibold ">Düzenle</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-[300px] bg-black text-white w-[30%] border rounded-md min-h-[300px]">
        <Link href={`/car/${params.id}/motor`} className="">
          <Image
            src={motor}
            alt="main"
            width={200}
            height={200}
            sizes="100vw"
            className="w-full h-full max-w-[500px] max-h-[280px] rounded-t-md object-cover object-center "
          />
        </Link>
        <div className="mb-10 p-4">
          <Link
            href={`/car/${params.id}/motor`}
            className="text-2xl font-bold"
          >
            Motor Notları
          </Link>
          <div className="flex gap-4 w-full h-full justify-end ">
            <Link href={`/update/${params.id}/motor`}>
              <Button className="font-semibold ">Düzenle</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full items-start ">
      <Dialog>
        <DialogTrigger className="flex gap-3 items-center bg-red-500 text-white px-4 py-3 rounded-md font-bold ">
          <span>Sil</span>
          <FaTrash className="" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="h-max">
            <DialogTitle>Silmek istediğne eminmisin?</DialogTitle>
            <DialogDescription>
              Bu işlem geri alınamaz. Bu arabayla ilgili bütün veriler
              silnecektir.
            </DialogDescription>
            <div className="flex w-full gap-2 mt-10">
              <DialogTrigger className="flex gap-3 border items-center px-4 py-3 rounded-md font-bold ">
                <span>Hayır</span>
              </DialogTrigger>
              <DialogTrigger
                className="flex gap-3 items-center bg-red-500 text-white px-4 py-3 rounded-md font-bold "
                onClick={handleDeleteCar}
              >
                <span>Evet</span>
                <FaTrash className="" />
              </DialogTrigger>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  </div>
  )
}
