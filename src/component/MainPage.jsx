import React from 'react'
import MainChamp from '../component/MainChamp'
import News from './News'
import Video from './Video'


export default function () {
  return (
    <div className='w-full h-full flex flex-col justify-center'>
      {/* main image */}
      <div className='w-full flex justify-center'>
        {/* image */}
        <div className='w-[1905px] h-[700px] relative flex justify-center items-center overflow-hidden'>
          <img 
          className='w-full h-full brightness-50 absolute'
          src="https://i.ytimg.com/vi/syRq0pI-k34/maxresdefault.jpg" alt="" />
          {/* banner */}
          <div className='absolute pt-[280px] flex flex-col cursor-pointer'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='border hover:border-4 border-white w-[180px] h-[60px] hover:rounded-xl hover:w-[170px] hover:h-[58px] duration-100 flex justify-center items-center'>
              <div className='w-[170px] h-[50px] brightness-[82%] bg-[#0BC6E3] rounded-xl flex justify-center items-center hover:bg-opacity-70 hover:text-white'>
                <p className='font-black text-md'>지금 시작하기</p>
              </div>
            </div>
          </div>
        </div>
        {/* imageword */}
      </div>
      {/* main news */}
      <News/>
      {/* video */}
      <Video/>
     {/* mainchamp */}
      <MainChamp/>
    </div>
  )
}
