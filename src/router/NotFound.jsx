import React from 'react'
import Layout from '../component/Layout'

export default function NotFound() {
  return (
    <Layout>
        <div className='py-8 w-full flex justify-center'>
          <div className='w-full max-w-7xl space-y-3 h-[500px] '>
            <p className='font-black text-[40px]'>404 오류</p>
            <p className='font-semibold text'>해당 페이지를 찾을 수 없습니다.</p>
          </div>
        </div>
    </Layout>
  )
}
