import React from 'react'
import Layout from './Layout'
import Pentakill from './Pentakill'
import Kda from './Kda'
import TrueDamage from './TrueDamage'
import HeartSteel from './HeartSteel'

export default function Universe() {
  return (
    <Layout>
        <div className='w-full flex flex-col items-center justify-center space-y-[65px] py-10 '>
           {/* header */}
           <div 
            style={{clipPath: `polygon(0 0, 97.5% 0, 100% 32%, 100% 100%, 0 100%, 0% 50%)`}}
            className='w-full max-w-[1600px] bg-[#061C25] justify-center flex'>
                <div className='w-full flex items-center p-4 text-white'>
                    {/* title */}
                    <div className='w-[24%] border-r text-[40px] font-black border-white'>
                        <p className='float-right pr-12'>유니버스</p>
                    </div>
                    {/* description */}
                    <div className='w-[76%] text-[17px] pl-12'>
                        <p>리그 오브 레전드 게임에 세계관에서 각각의 챔피언들이 모여서 뮤지션이 되어 팀을 이룬다</p>
                    </div>
                </div>
            </div>
            {/* 메인 */}
            <div className='w-full max-w-[1350px] space-y-12 '>
               <Pentakill/>
               <Kda/>
               <TrueDamage/>
               <HeartSteel/>
            </div>
        </div>
    </Layout>
  )
}
