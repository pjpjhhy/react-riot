import React from 'react'
import Layout from './Layout'
import Pentakill from './Pentakill'
import Kda from './Kda'

export default function Universe() {
  return (
    <Layout>
        <div className='w-full flex justify-center py-16'>
            <div className='w-full max-w-[1450px] space-y-12'>
               <Pentakill/>
               <Kda/>
            </div>
        </div>
    </Layout>
  )
}
