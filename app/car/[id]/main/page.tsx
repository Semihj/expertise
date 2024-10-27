"use client";
import React, { useEffect, useRef, useState } from "react";
import generatePDF from "react-to-pdf";
import { CarDataProps } from "@/types/carData";
import { useParams } from "next/navigation";
import { FaFilePdf } from "react-icons/fa6";

const url = process.env.NEXT_DEV_URL || "http://localhost:3000"

export default function CarPage() {
  const targetRef = useRef();
  const [carData, setCarData] = useState<CarDataProps>({});
  const params = useParams();

  const getCar = async () => {
    try {
      const res = await fetch(`${url}/api/car/${params.id}`, {
        method: "GET",
      });
      const data: CarDataProps = await res.json();
      setCarData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <div className="w-full h-full flex justify-center py-10    ">
      <div className="w-max h-max bottom-10 right-10 fixed border p-4 rounded-sm hover:scale-110 duration-100 transition ">
        {" "}
        <FaFilePdf
          className="w-10 h-10  "
          onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
        />
      </div>{" "}
      <div
        className="w-[1000px] min-h-screen  px-2 flex flex-col gap-5 mb-20   "
        ref={targetRef}
      >
        <div className="flex w-full gap-20 h-20 px-4 items-center  ">
          <h1 className="text-4xl text-yellow-500 font-bold ">
            Teknik<span className="text-black italic">oto</span>
          </h1>
          <div className="flex gap-4 ">
            <div className="flex flex-col uppercase">
              <h1 className="font-bold ">
                Marka:
                <span className="uppercase font-normal ">{carData.marka}</span>
              </h1>
              <h1 className="font-bold ">
                Plake:
                <span className="uppercase font-normal ">{carData.plaka} </span>
              </h1>
            </div>
            <div className="flex flex-col">
              {" "}
              <h1 className="font-bold ">
                Şasi No:
                <span className="uppercase font-normal ">
                  {" "}
                  {carData.sasi_no}{" "}
                </span>
              </h1>
              <h1 className="font-bold ">
                Tarih:
                <span className="uppercase font-normal ">
                  {carData.arac_giris_tarih}{" "}
                </span>
              </h1>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full text-white bg-yellow-500 flex justify-center font-bold text-2xl py-2 rounded-md uppercase ">
            Araç Teslim Formu
          </div>
          <div className="flex gap-5 w-full justify-between ">
            <div className="border-2 rounded-md w-full flex flex-col  ">
              <div className="border-b flex h-full w-full justify-between items-center p-3 pr-20 ">
                <h1 className="uppercase font-semibold ">Araç Giriş Tarihi</h1>
                <span className="font-semibold"> {carData?.arac_giris_tarih} </span>
              </div>

              <div className="border-b flex h-full w-full justify-between items-center p-3 pr-20 ">
                <h1 className="uppercase font-semibold ">Araç Giriş KM/MIL</h1>
                <span className="font-semibold">{carData?.arac_giris_km} </span>
              </div>

              <div className="border-b flex h-full w-full justify-between items-center p-3 pr-20 ">
                <h1 className="uppercase font-semibold ">Araç Çıkış KM/MIL</h1>
                <span className="font-semibold">{carData?.arac_cıkıs_km} </span>
              </div>
            </div>
            <div className="border-2 rounded-md w-full flex flex-col uppercase ">
              <div className="border flex h-full w-full justify-between items-center p-3 pr-20 ">
                <h1 className="uppercase font-semibold ">Raporu olusturan </h1>
                <span className="font-semibold">{carData?.olusturan} </span>
              </div>
              <div className="border flex h-full w-full justify-between items-center p-3 pr-20 ">
                <h1 className="uppercase font-semibold ">Expertiz paketi</h1>
                <span className="font-semibold">{carData?.paket} </span>
              </div>
              <div className="border flex h-full w-full justify-between items-center p-3 pr-20 ">
                <h1 className="uppercase font-semibold ">Hizmet ucreti</h1>
                <span className="font-semibold">{carData?.ucret} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col ">
          <div className="w-full text-center justify-center flex bg-yellow-500 p-3 ">
            <h1 className="text-2xl font-semibold text-white uppercase  ">
              Araç bilgileri
            </h1>
          </div>
          <div className="flex">
            <div className="flex flex-col  border w-full gap-2  ">
              <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                <div className="uppercase flex  w-1/2 ">
                  <h1 className="w-full">Marka</h1>
                  <span className="w-full">{carData?.marka} </span>
                </div>
              </div>
              <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                <div className="uppercase flex  w-full ">
                  <h1 className="w-full">Model yili</h1>
                  <span className="w-full">{carData?.model_yıl} </span>
                </div>
                <div className="uppercase flex w-full ">
                  <h1 className="w-full">Plaka</h1>
                  <span className="w-full">{carData?.plaka} </span>
                </div>
              </div>
              <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                <div className="uppercase flex w-full border-green-700 ">
                  <h1 className="w-full">Yakıt türü</h1>
                  <span className="w-full">{carData?.yakıt} </span>
                </div>
                <div className="uppercase flex w-full border-gray-800 ">
                  <h1 className="w-full">şasi no</h1>
                  <span className="w-full">{carData?.sasi_no} </span>
                </div>
              </div>
              <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                <div className="uppercase flex  w-1/2  ">
                  <h1 className="w-full">vites</h1>
                  <span className="w-full">{carData?.vites} </span>
                </div>
              </div>
              <div className="flex w-full justify-between px-5 py-2  font-semibold border-b ">
                <div className="uppercase flex   w-full ">
                  <h1 className="w-full">renk</h1>
                  <span className="w-full"> {carData?.renk} </span>
                </div>
                <div className="uppercase flex  w-full ">
                  <h1 className="w-full">KM/mıl</h1>
                  <span className="w-full">{carData?.km} </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between gap-5 ">
          <div className="w-full flex flex-col border">
            <h1 className="w-full bg-yellow-500 text-2xl py-3 font-semibold text-center uppercase text-white  ">
              Alıcı bilgileri
            </h1>

            <div className="flex flex-col">
              <div className="flex gap-5 p-5  items-center border font-semibold">
                <h1 className=" ">AD SOYAD</h1>
                <span>{carData?.alıcı_ad} </span>
              </div>
              <div className="flex gap-5 p-5  items-center border font-semibold">
                <h1 className=" ">Telefon</h1>
                <span>{carData?.alıcı_tel} </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col border">
            <h1 className="w-full bg-yellow-500 text-2xl py-3 font-semibold text-center uppercase text-white  ">
              Araç Sahibi
            </h1>

            <div className="flex flex-col">
              <div className="flex gap-5 p-5  items-center border font-semibold">
                <h1 className=" ">AD SOYAD </h1>
                <span>{carData?.sahib_ad} </span>
              </div>
              <div className="flex gap-5 p-5  items-center border font-semibold">
                <h1 className=" ">Telefon</h1>
                <span>{carData?.sahib_tel} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between w-full">
          <div className="flex flex-col w-full border-2 ">
            <h1 className="w-full uppercase bg-yellow-500 text-center p-4 text-white font-semibold ">
              Alıcı
            </h1>
            <div className="w-full flex justify-center min-h-[130px] ">
              <span>AD SOYAD - IMZA</span>
            </div>
          </div>
          <div className="flex flex-col w-full border-2 ">
            <h1 className="w-full uppercase bg-yellow-500 text-center p-4 text-white font-semibold ">
              Satıcı
            </h1>
            <div className="w-full flex justify-center min-[130px] ">
              <span>AD SOYAD - IMZA</span>
            </div>
          </div>
          <div className="flex flex-col w-full border-2 ">
            <h1 className="w-full uppercase bg-yellow-500 text-center p-4 text-white font-semibold ">
              Firma
            </h1>
            <div className="w-full flex justify-center min-h-[130px] ">
              <span>AD SOYAD - IMZA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
