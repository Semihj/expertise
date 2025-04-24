"use client"
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
 
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';

export default function UpdateBar({isUpdateBar,notes,note,setIsUpdateBar,setNotes}:{isUpdateBar:any,notes:any,note:any,setIsUpdateBar:any,setNotes:any}) {
  
  const [newText,setNewText] = useState(note.text)
  const [newColor,setNewColor] = useState(note.bgcolor)
  const [newFontSize, setNewFontSize] = useState(note.fontSize)
  const [newPadding, setNewPadding] = useState(note.padding)
  const colors = [
    {
      id:1,
      color:"red",
    },
    {
      id:2,
      color:"blue",
    },
    {
      id:3,
      color:"yellow",
    },
    {
      id:1,
      color:"green",
    },
    {
      id:2,
      color:"black",
    },
    {
      id:3,
      color:"gray",
    },
    {
      id:1,
      color:"purple",
    },
  
  ]


  const newNoteOptions = [
    {
      text:"Orjinal",
      color:"green",
      fontSize:13,
      padding:4,
    },
    {
      text:"Boyalı",
      color:"blue",
      fontSize:13,
      padding:4,
    },
    {
      text:"Değişmiş",
      color:"red",
      fontSize:13,
      padding:4,
    },
    {
      text:"Lokal Boyalı",
      color:"sarı",
      fontSize:13,
      padding:4,
    },
    {
      text:"Sökme-Takma",
      color:"purple",
      fontSize:13,
      padding:4,
    },
  ]
  
  const handleNoteUpdate = ({
    id,
    text,
    color,
    fontSize,
    padding
  }: {
    id: any,
    text: any,
    color: any,
    fontSize:any,
    padding:any
  }) => {
   
    
    const note = notes.find((note) => note.id === id);
    if (note) {
      note.bgcolor = color;
      note.text = text;
      note.fontSize = fontSize;
      note.padding = padding
    }
  };
  
  
  const handleDeleteNote = (id:any) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)

  }
  return (
    <Sheet open={isUpdateBar} onOpenChange={(val) => {
        if(!val) setIsUpdateBar(false)
      }
       } >
        <SheetContent>
          <div className="flex flex-col w-full h-full gap-5 ">
            <div className="flex gap-3">
              <h1 className='text-2xl font-bold' >Text:</h1>
              <input type="text" defaultValue={note.text} onChange={(e) => setNewText(e.target.value) }  />
            </div>
            <div className="flex gap-3">
              <h1 className='text-2xl font-bold' >Renk:</h1>
              <div className="w-full h-max border-2 p-2 flex flex-wrap gap-2  ">
                {colors.map((color,i) => (
                  <div
                   style={{
                    backgroundColor:color.color
                   }}
                   onClick={() => setNewColor(color.color)}
                   className={`  w-10 h-10 `} key={i} >

                  </div>
                ))}
              </div>
          
            </div>
            <div className="flex gap-3">
            <h1 className='text-2xl font-bold' >Font</h1>
            <input type="number" defaultValue={newFontSize} className='border text-black px-2' onChange={(e) => setNewFontSize(e.target.value) } />
            </div>  
            <div className="flex gap-3">
            <h1 className='text-2xl font-bold' >Kutu</h1>
            <input type="number" className='border text-black px-2' defaultValue={newPadding} onChange={(e) => setNewPadding(e.target.value) } />
            </div>  
              <div
            className={`text-white font-semibold p-3 w-max rounded-md `}
           
            style={{
              backgroundColor: newColor,
              padding:`${newPadding}px`,
              fontSize:`${newFontSize}px`
              
            }}
          >
            {newText}
          </div>
            <div className=" flex w-full h-full justify-end items-end">
              <div className="flex gap-5">
            <SheetTrigger>    <Button 
                onClick={() => handleDeleteNote(note.id)}
                className='bg-red-600 font-semibold text-white ' >
                  Delete
                </Button>
                </SheetTrigger>
                <SheetTrigger>
              <Button onClick={() => handleNoteUpdate({
                id:note.id,
                text:newText,
                color:newColor,
                padding:newPadding,
                fontSize:newFontSize
              }) } >
                Update
              </Button></SheetTrigger>
            </div></div>
          </div>
        </SheetContent>
      </Sheet>
  )
}
