"use client";
import Image from "next/image";
import React, { useEffect} from "react";
import car3 from "@/public/expertise3.jpg";
import car4 from "@/public/expertise4.jpg";
import car5 from "@/public/expertise5.jpg";
import { useState } from "react";
import Draggable from "react-draggable"; // T
import UpdateBar from "./_components/UpdateBar";

import { Button } from "@/components/ui/button";
import TechNotes from "./_components/TechNotes"
import { CirclePlus } from "lucide-react";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";

const url = process.env.NEXT_DEV_URL || "http://localhost:3000"

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
  const [isLoading,setIsLoading] = useState(false)
  const [desc,setDesc] = useState("");
  const params = useParams()
  const [selectedNote, setSelectedNote] = useState({});
  const [isUpdateBar, setIsUpdateBar] = useState(false);

  const takeScreenshot = async () => {
    setIsLoading(true)
  
    try {
      const res = await fetch(`/api/car/${params.id}`,{
        method:"PATCH",
        headers:{
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":url,

        },
        body:JSON.stringify({
          notes:notes,
          desc:desc
        })
      })
      const data = await res.json();
      console.log(data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      
    }

  
  
  };

  const addNewNote = (e) => {
    const newNote = {
      id: notes.length + 1,
      x: 0,
      y: 0,
      text: "Yeni Not",
      bgcolor: "#1e8012",
      fontSize:13,
      padding:4
    };
    setNotes([...notes, newNote]);
  };
  const handleDragChange = ({ id, x, y }: { id: number; x: any; y: any }) => {
    const note = notes.find((note) => note.id === id);
    if (note) {
      note.x = x;
      note.y = y;
    }
  };

  const getCar = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`/api/car/${params.id}`,{
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
      {isLoading ? <Loading/> :
      <div className=" ">
      {isUpdateBar && (
        <UpdateBar
          setNotes={setNotes}
          isUpdateBar={isUpdateBar}
          setIsUpdateBar={setIsUpdateBar}
          notes={notes}
          note={selectedNote}
        />
      )}
      <div className="w-[1000px] h-max px-2 flex flex-col  ">
        <div className="w-full bg-green-500 text-white text-2xl font-bold text-center p-2 rounded-t-md ">Güncelle</div>
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
                onDrag={(e, data) =>
                  handleDragChange({
                    id: note.id,
                    x: data.x,
                    y: data.y,
                  })
                }
                defaultPosition={{ x: note.x, y: note.y }}
              >
                <div
                  className={`text-white absolute font-semibold  p-2 w-max z-10 rounded-md `}
                  onContextMenu={() => {
                    setIsUpdateBar(true);
                    setSelectedNote(note);
                  }}
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
        <Button className="fixed uppercase bottom-10 right-10" onClick={takeScreenshot}>
          Bitir
        </Button>
          <div className="absolute top-10 right-2 xl:right-10" onClick={addNewNote} >
          <CirclePlus className="w-10 h-10" />
          </div>
      </div>
         <TechNotes desc={desc} setDesc={setDesc} notes={notes}/> 
  </div>  }
    </div>
  );
}
