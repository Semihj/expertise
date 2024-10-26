import React from 'react'

export default function Pagination({length,page,setPage}:{length:number,page:number,setPage:any}) {
  return (
    <div className='w-[1000px] flex flex-wrap mt-5 gap-3  ' >
        {Array.from({length:Math.round(length / 9 ) + 1}).map((_,i) => (
            <div className={`p-3 px-5 text-center h-max w-max border shadow-md text-xl font-semibold ${page === i+1 && "bg-black text-white "}  `}

            onClick={() => setPage(i+1) }
            key={i}
            > {i+1} </div>
        ))}
    </div>
  )
}
