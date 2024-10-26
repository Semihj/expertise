import React from 'react'

export default function TechNotes({notes,desc}:{notes:any,desc:any}) {

 
   
  return (
    <div className="w-[1000px] px-2 flex flex-col mt-10  ">
    <h1 className="w-full p-3 bg-yellow-500 text-center rounded-md text-white text-xl font-bol uppercase " >teknisyen notları</h1>
   <div className="flex flex-col  h-max border min-h-[500px] w-full p-4 gap-4  ">
    <div className="flex justify-between w-full h-max gap-4">
       <div className="flex flex-col gap-4 w-full">{notes.filter((noteObj) => noteObj.part === "sol" ).map((note,i) => {
            return <div className="w-full flex justify-between" key={i} >
                <h1 className='text-md uppercase font-semibold ' >{note.title} </h1>
                    <div key={i} className="p-1 text-sm uppercase font-semibold text-white rounded-md "
                style={{backgroundColor:note.bgcolor}} 
                
                >
                    {note.text}
                </div>
                
            </div>
       }) }
      </div> 
      <div className="flex flex-col gap-4 w-full">{notes.filter((noteObj) => noteObj.part === "orta" ).map((note,i) => {
            return <div className="w-full flex justify-between" key={i} >
                <h1 className='text-md uppercase font-semibold ' >{note.title} </h1>
                    <div key={i} className="p-1 text-sm uppercase font-semibold text-white rounded-md "
                style={{backgroundColor:note.bgcolor}} 
                
                >
                    {note.text}
                </div>
                
            </div>
       }) }
      </div> 
      <div className="flex flex-col gap-4 w-full">{notes.filter((noteObj) => noteObj.part === "sağ" ).map((note,i) => {
            return <div className="w-full flex justify-between" key={i} >
                <h1 className='text-md uppercase font-semibold ' >{note.title} </h1>
                    <div key={i} className="p-1 text-sm uppercase font-semibold text-white rounded-md "
                style={{backgroundColor:note.bgcolor}} 
                
                >
                    {note.text}
                </div>
                
            </div>
       }) }
      </div> 
      </div>
       <div className="mt-10 border-t-2">
        <p className='w-full min-h-[160px]  px-4 py-2 outline-none border-gray-400 mt-5 rounded-md '>
            {desc}
        </p>
       </div>
   </div>
  
  </div>
  )
}
