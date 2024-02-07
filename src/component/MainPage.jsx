import React from 'react'
import MainChamp from '../component/MainChamp'


export default function () {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
      {/* main image */}
      <div className='w-full flex justify-center'>
        {/* image */}
        <div className='w-[1905px] h-[700px] flex'>
          <img 
          className='w-full h-full brightness-50'
          src="https://i.ytimg.com/vi/syRq0pI-k34/maxresdefault.jpg" alt="" />
        </div>
        {/* imageword */}
      </div>
      {/* main video */}
      <div className='w-full max-w-7xl py-12'>

      </div>
      <MainChamp/>
    </div>
  )
}
