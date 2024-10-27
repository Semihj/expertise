"use client";

import { CarDataProps, MotorDataProps } from "@/types/carData";
import { useParams } from "next/navigation";
import generatePDF from "react-to-pdf";

import React, { useEffect, useRef, useState } from "react";
import Loading from "@/components/Loading";
import { FaFilePdf } from "react-icons/fa6";

const url = process.env.NEXT_DEV_URL || "http://localhost:3000"


export default function MotorPage() {
  const [motorData,setMotorData] = useState<MotorDataProps[]>([
    {
      id:1,
      title:"Motor Koruyucu Kapağı",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      not:"",
      
    },
    {
      id:2,
      title:"Hava FİLTRE KABİNİ",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      not:"",
      

    },
    {
      id:3,
      title:"Motor Elektrik Tesisatı",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:4,
      title:"Motor Yağı ve Sızdırmazlık",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:5,
      title:"Motor Yağ Seviyesi",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:6,
      title:"Yağ Soğutucusu",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:7,
      title:"Motor Isı ve Ses İzolasyon",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:8,
      title:"Turbo İntercooler Kontrolü",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:9,
      title:"Egr valfi ve enjektör kontrolü",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:9,
      title:"Görünen tüm kayışlar",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:10,
      title:"Motor Su Sızdırmazlık",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:11,
      title:"Yakıt Sistemi ve Sızdırmazlık",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:12,
      title:"Direksiyon pompa kontrolü",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
    {
      id:13,
      title:"Soğutma Fanları",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    }, {
      id:14,
      title:"Motor Su Radyatörü ve paneli",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    }, {
      id:15,
      title:"Klima Radyatörü ve Boruları",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
     {
      id:16,
      title:"Motor Üfleme",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
     {
      id:17,
      title:"Fren HİDROLİĞİ",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
     {
      id:18,
      title:"Motor Vuruntulu/Düzensiz çalışma",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      
      not:"",
    },
     {
      id:19,
      title:"Turbo Genel Kontrolü",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      not:"",
    },
     {
      id:20,
      title:"Akü",
      text:"İYİ",
      bgColor:"bg-green-500",
      textColor:"text-white",
      not:"",
      
    },
  ])
  const [motorNote, setMotorNote] = useState("");
  const [carData,setCarData] = useState<CarDataProps>({})
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const targetRef = useRef();

  const getCar = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}/api/car/${params.id}`, {
        method: "GET",
      });
      const data = await res.json();
      setCarData(data)
      if (data.motorData.length > 0) {
        
        setMotorData(data.motorData);
        setIsLoading(false);
      }
      if (data.motorNote) {
        setMotorNote(data.motorNote);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <div className="w-full flex justify-center gap-2 ">
           <div className="w-max h-max bottom-10 right-10 fixed border p-4 rounded-sm hover:scale-110 duration-100 transition ">
        {" "}
        <FaFilePdf
          className="w-10 h-10  "
          onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
        />
      </div>
      
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-[1000px] h-max "
        
        ref={targetRef}>
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
                Plaka:
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
        </div> <div className="w-[1000px] border-t border-l border-r h-max mt-10 flex flex-col mb-20 " 
            >
            
            <div className="w-full h-max p-4 flex justify-between  uppercase font-bold text-lg items-center border-b">
              <div className="flex gap-4 w-full ">
                <span></span>
                <span> Kontrol Noktası</span>
              </div>
              <span className="w-full  text-center">Durum</span>
              <span className="w-full text-end">Not</span>
            </div>
            {motorData.map((data, i) => (
              <div
                className="w-full flex justify-between px-4  text-md border-b  "
                key={i}
              >
                <div className="flex gap-4 w-full py-1 ">
                  <span>{i + 1} </span>
                  <span className="uppercase font-semibold">{data.title} </span>
                </div>
                <div
                  className={`w-full max-w-[200px] border font-bold ${data.bgColor} ${data.textColor}  text-center uppercase py-1 `}
                >
                  <span className=" ">{data.text}</span>{" "}
                </div>
                <span className="w-full my-1 px-2 ">
                  {data.not}
                </span>
              </div>
            ))}
            <div className="mt-10  ">
              <div className="w-full text-center p-3 bg-yellow-500 uppercase font-bold text-white ">
                Teknisyen notları
              </div>
              <div className="w-full h-full ">
                <p
                  className="w-full resize-none h-max p-3 "
                  defaultValue={motorNote}
                >
                  {motorNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
