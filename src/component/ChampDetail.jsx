import React from 'react'
import Layout from './Layout'


export default function ChampDetail() {


  return (
    <Layout>
        <div className='w-full flex flex-col justify-center'>
            {/* backdrop image */}
            <div className=' w-full flex h-[750px] relative'>
                <img 
                className='w-full h-full brightness-[28%]'
                src="https://c.wallhere.com/photos/9d/e2/1920x1080_px_League_Of_Legends-680018.jpg!d" alt="" />
            </div>
            {/* champ info */}
            <div className='absolute'>
                {/* image */}
                <div></div>
                {/* info */}
                <div></div>
            </div>
            {/* champ skins */}
            {/* <ChampSkin/> */}
        </div>
    </Layout>
  )
}
