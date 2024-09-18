import React from 'react'
import {ChevronLeft,ChevronRight} from 'react-feather'

export default function Carrousel({children:images}) {
  return (
    <div className='overflow-hidden relative h-full'>
    <div className='flex' >{images}</div>
    <div className='absolute inset-0 flex items-center justify-between p-2'>
        <button className='absolute bg-white p-2 rounded-full shadow left-2 top-1/2 transform -translate-y-1/2'>
            <ChevronLeft size={40}/>
        </button>
        <button className='absolute bg-white p-2 rounded-full shadow right-2 top-1/2 transform -translate-y-1/2'>
            <ChevronRight size={40}/>
        </button>
    </div>
      
    </div>
  )
}
