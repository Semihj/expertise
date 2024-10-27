"use client";

import { Button } from '@/components/ui/button';
import { MotorDataProps } from '@/types/carData';
import { CirclePlus } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import UpdateBar from './_components/UpdateBar';
import Loading from '@/components/Loading';

const url = process.env.NEXT_DEV_URL || "http://localhost:3000"

export default function MotorUpdate() {

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
  const [motorNote,setMotorNote] = useState("")
  const [isUpdateBar,setIsUpdateBar] = useState(false)
  const [selectedNote,setSelectedNote] = useState<MotorDataProps>()
  const params = useParams()
  const [isLoading,setIsLoading] = useState(false)

  const handleUpdate = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`${url}/api/car/${params.id}`,{
        method:"PATCH",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          motorData:motorData,
          motorNote:motorNote
        })
      })
      const data = await res.json();
      setIsLoading(false)
      console.log(data);
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      
    }
  }

  const getCar = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`${url}/api/car/${params.id}`,{
        method:"GET"
      })
      const data = await res.json();
      if(data.motorData.length > 0) {
        setMotorData(data.motorData)
        setIsLoading(false)
      }
      if(data.motorNote) {
        setMotorNote(data.motorNote)
      }
      setIsLoading(false)
      
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      
    }
  }

  


  useEffect(() => {
    getCar()
  }, [])
  const addNewNote = () => {
    setMotorData([...motorData,{
      id:motorData.length + 1,
      text:"İYİ",
      title:"Motor Test",
      bgColor:"bg-green-500",
      textColor:"text-white",
      not:"",
    } ])
  }
  console.log(motorData[0].not);
  
  
  const handleNoteChange = ({id,newNot}:{id:number,newNot:string}) => {
    const motor = motorData.find((data) => data.id === id);
    console.log(newNot);
    
    if (motor) {
      setMotorData((prevData) =>
        prevData.map((motor) => (motor.id === id ? { ...motor, not: newNot } : motor))
      );
    } else {
      console.log("something wrong");
      
    }
    
  }


  return (
    <div className='w-full flex justify-center gap-2 ' >
      {isLoading ? <Loading/>:
      <div className="flex">
        {isUpdateBar && (
        <UpdateBar
          setMotorData={setMotorData}
          isUpdateBar={isUpdateBar}
          setIsUpdateBar={setIsUpdateBar}
          motorData={motorData}
          note={selectedNote}
        />
      )}
      <div className="w-[1000px] border-t border-l border-r h-max mt-10 flex flex-col mb-20 ">
        <div className="w-full p-4 flex justify-between  uppercase font-bold text-lg items-center border-b">
            <div className='flex gap-4 w-full ' >

              <span></span>
              <span> Kontrol Noktası</span>
            </div>
            <span className='w-full  text-center' >Durum</span>
            <span className='w-full text-end' >Not</span>
        </div>
        {motorData.map((data,i) => (
           <div className="w-full flex justify-between px-4  text-md border-b  "
           key={i}
           
           >
        <div className="flex gap-4 w-full py-1 ">
          <span>{i+1} </span>
          <span className='uppercase font-semibold'
          onClick={() => {
            setIsUpdateBar(true)
            setSelectedNote(data)
          }}
             >{data.title} </span>
        </div>
        <div className={`w-full max-w-[200px] border font-bold ${data.bgColor} ${data.textColor}  text-center uppercase py-1 `}
        onClick={() => {
          setIsUpdateBar(true);
          setSelectedNote(data)
        }}
        >
          <span className=' ' >{data.text}</span> </div>
        <input className="w-full focus:outline-none px-2 " defaultValue={data.not} 
        onChange={(e) => handleNoteChange({id:data.id,newNot:e.target.value}) }
        
        />

        </div>
        ))}
       <div className="mt-10  ">
        <div className="w-full text-center p-3 bg-yellow-500 uppercase font-bold text-white ">Teknisyen notları</div>
        <div className="w-full h-full ">
          <textarea 
          className='w-full resize-none h-max p-3 ' 
          onChange={(e) => setMotorNote(e.target.value) }
          defaultValue={motorNote}
          >

           </textarea>
           
        </div>
        <div className="w-full flex justify-end" onClick={handleUpdate} ><Button>Bitir</Button> </div>
       </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 ">
      <div className="" onClick={addNewNote} >
          <CirclePlus className="w-10 h-10" />
          </div>
     </div> </div>}
    </div>
  )
}
