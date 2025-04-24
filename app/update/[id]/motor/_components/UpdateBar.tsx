"use client"
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
 
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';

export default function UpdateBar({isUpdateBar,motorData,note,setIsUpdateBar,setMotorData}:{isUpdateBar:any,motorData:any,note:any,setIsUpdateBar:any,setMotorData:any}) {
  
  const [newText,setNewText] = useState(note.text)
  const [newColor,setNewColor] = useState(note.bgColor)
  const [newTitle, setNewTitle] = useState(note.title)
  const [newTextColor, setNewTextColor] = useState(note.textColor)
  const colors = [
    {
      id:1,
      bgColor:"bg-white",
      textColor:"text-white"
    },
    {
      id:1,
      bgColor:"bg-red-500",
      textColor:"text-red-500"
    },
    {
      id:2,
      bgColor:"bg-blue-500",
      textColor:"text-blue-500",
    },
    {
      id:3,
      bgColor:"bg-yellow-300",
      textColor:"text-yellow-500",
    },
    {
      id:1,
      bgColor:"bg-green-500",
      textColor:"text-green-500",
    },
    {
      id:2,
      bgColor:"bg-black",
      textColor:"text-black",
    },
    {
      id:3,
      bgColor:"bg-gray-500",
      textColor:"text-gray-500",
    },
    {
      id:1,
      bgColor:"bg-purple-500",
      textColor:"text-purple-500",
    },
  
  ]


 
  
  const handleNoteUpdate = ({
    id,
    text,
    title,
    bgColor,
    textColor,
    
  }: {
    id: any,
    title:any,
    text: any,
    bgColor: any,
    textColor:any,
  }) => {
   
    
    const note = motorData.find((note) => note.id === id);
    if (note) {
      note.bgColor = bgColor;
      note.text = text;
      note.title = title;
      note.textColor = textColor;
    }
  };
  
  
  const handleDeleteNote = (id:any) => {
    const newNotes = motorData.filter((note) => note.id !== id)
    setMotorData(newNotes)

  }
  return (
    <Sheet open={isUpdateBar} onOpenChange={(val) => {
        if(!val) setIsUpdateBar(false)
      }
       } >
        <SheetContent>
          <div className="flex flex-col w-full h-full gap-5 ">
            <div className="flex gap-3">
              <h1 className='text-2xl font-bold' >Title:</h1>
              <input type="text" defaultValue={note.title} onChange={(e) => setNewTitle(e.target.value) }  />
            </div>
            <div className="flex gap-3">
              <h1 className='text-2xl font-bold' >Text:</h1>
              <input type="text" defaultValue={note.text} onChange={(e) => setNewText(e.target.value) }  />
            </div>
           
            <div className="flex gap-3">
              <h1 className='text-2xl font-bold' >Kutu Renk:</h1>
              <div className="w-full h-max border-2 p-2 flex flex-wrap gap-2  ">
                {colors.map((color,i) => (
                  <div
                 
                   onClick={() => setNewColor(color.bgColor)}
                   className={`  w-10 h-10 ${color.bgColor} border `} key={i} >

                  </div>
                ))}
              </div>
          
            </div>
            <div className="flex gap-3">
              <h1 className='text-2xl font-bold' >Yazı Renk:</h1>
              <div className="w-full h-max border-2 p-2 flex flex-wrap gap-2  ">
                {colors.map((color,i) => (
                  <div
                 
                   onClick={() => setNewTextColor(color.textColor)}
                   className={`  w-10 h-10  ${color.bgColor} border`} key={i} >

                  </div>
                ))}
              </div>
          
            </div>
            
          
              <div
            className={` font-bold w-full text-center uppercase py-1 border ${newColor}`}
           
            
          >
           <span className={`${newTextColor}  `} > {newText}  </span> 
          </div>
            <div className=" flex w-full h-full justify-end items-end">
              <div className="flex gap-5">
            <SheetTrigger>    <Button 
                onClick={() => handleDeleteNote(note.id)}
                className='bg-red-600 font-semibold text-white ' >
                Sil
                </Button>
                </SheetTrigger>
                <SheetTrigger>
              <Button onClick={() => handleNoteUpdate({
                id:note.id,
                text:newText,
                title:newTitle,
                textColor:newTextColor,
                bgColor:newColor,
              }) } >
                Güncelle
              </Button></SheetTrigger>
            </div></div>
          </div>
        </SheetContent>
      </Sheet>
  )
}
