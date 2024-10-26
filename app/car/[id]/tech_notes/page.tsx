"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import car3 from "@/public/expertise3.jpg";
import car4 from "@/public/expertise4.jpg";
import car5 from "@/public/expertise5.jpg";
import { useState } from "react";
import Draggable from "react-draggable"; // T
import TechNotes from "./_components/TechNotes"
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { CarDataProps } from "@/types/carData";
import { FaFilePdf } from "react-icons/fa6";
import generatePDF from "react-to-pdf";



export default function SkeletonPage() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      x: 180,
      part:"sol",
      title:"Sol ön kapı",
      y: 120,
      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:13,
      padding:4
    },
    {
      id: 2,
      x: 280,
      part:"sol",
      title:"Sol arka kapı",
      y: 120,
      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:13,
      padding:4
    },
    {
      id: 3,
      x: 80,
      part:"sol",
      title:"Sol ön çamurluk",
      y: 100,
      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:13,
      padding:4
    },
    {
      id: 4,
      x: 380,
      part:"sol",

      title:"Sol arka çamurluk",

      y: 100,
      text: "Orjinal",

      bgcolor: "#08a7b9",
      fontSize:13,
      padding:4
    },
    {
      id: 5,
      x: 380,
      part:"sağ",

      title:"Sağ ön çamurluk",
      y: 280,
      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:13,
      padding:4
    },
    {
      id: 6,
      x: 270,
      part:"sağ",

      title:"Sağ ön kapı",

      y: 300,
      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:13,
      padding:4
    },
    {
      id: 7,
      x: 170,
      y: 300,
      part:"sağ",

      title:"Sağ  arka kapı",

      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:13,
      padding:4
    },
    {
      id: 8,
      x: 80,
      part:"sağ",

      y: 280,
      title:"Sağ arka çamurluk",

      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:13,
      padding:4
    },{
      id: 9,
      x: 670,
      title:"Tavan",
      part:"orta",
      y: 300,
      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:17,
      padding:8
    },
    {
      id: 10,
      x: 670,
      title:"Ön kaput",
      part:"orta",
      y: 70,
      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:17,
      padding:8
    },
    {
      id: 11,
      x: 670,
      title:"Bagaj",
      part:"orta",

      y: 500,
      text: "Orjinal",
      bgcolor: "#08a7b9",
      fontSize:17,
      padding:8
    },
  ]);
  const [carData,setCarData] = useState<CarDataProps>()
  const [isLoading,setIsLoading] = useState(false)
  const [desc,setDesc] = useState("");
  const params = useParams()
  const targetRef = useRef();


 




  const getCar = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`http://localhost:3000/api/car/${params.id}`,{
        method:"GET"
      })
      const data = await res.json();
      if(data.notes.length > 0) {
        setNotes(data.notes)
        setIsLoading(false)
      }
      if(data.desc) {
        setDesc(data.desc)
      }
      setCarData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
      
    }
  }

  


  useEffect(() => {
    getCar()
  }, [])
  
 


  return (
    <div className=" w-full h-full flex flex-col justify-center items-center py-10">
         <div className="w-max h-max bottom-10 right-10 fixed border p-4 rounded-sm hover:scale-110 duration-100 transition ">
        {" "}
        <FaFilePdf
          className="w-10 h-10  "
          onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
        />
      </div>{" "}
      {isLoading ? <Loading/> :
      <div className=" "
      ref={targetRef}>
      <div className="w-[1000px] h-max px-2 flex flex-col  "
      
      >
      <div className="flex w-full gap-20 h-20 px-4 items-center   ">
          <h1 className="text-4xl text-yellow-500 font-bold ">
            Teknik<span className="text-black italic">oto</span>
          </h1>
          <div className="flex gap-4 ">
            <div className="flex flex-col uppercase">
              <h1 className="font-bold ">
                Marka:
                <span className="uppercase font-normal ">{carData?.marka}</span>
              </h1>
              <h1 className="font-bold ">
                Plake:
                <span className="uppercase font-normal ">{carData?.plaka} </span>
              </h1>
            </div>
            <div className="flex flex-col">
              {" "}
              <h1 className="font-bold ">
                Şasi No:
                <span className="uppercase font-normal ">
                  {" "}
                  {carData?.sasi_no}{" "}
                </span>
              </h1>
              <h1 className="font-bold ">
                Tarih:
                <span className="uppercase font-normal ">
                  {carData?.arac_giris_tarih}{" "}
                </span>
              </h1>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="w-full flex border-2 h-max " >
          <div className="-z-10 flex flex-col mt-10 gap-5">
            <Image src={car3} alt="car" width={500} height={500} />
            <Image src={car4} alt="car" width={500} height={500} />
           
          </div>
          <div className="">
          <Image src={car5} alt="car" width={400} height={300} />
            
          </div>
          <div className="z-10 absolute">
            {notes?.map((note) => (
              <Draggable
                key={note.id}
                disabled
                
                defaultPosition={{ x: note.x, y: note.y }}
              >
                <div
                  className={`text-white absolute font-semibold  p-2 w-max z-10 rounded-md `}
              
                  style={{
                    backgroundColor: note.bgcolor,
                    fontSize:`${note.fontSize}px`,
                    padding:`${note.padding}px`,

                  }}
                >
                  {note.text}
                </div>
              </Draggable>
            ))}
          </div>
         
        </div>
       
      </div>
         <TechNotes desc={desc}  notes={notes}/> 
  </div>  }
    </div>
  );
}
