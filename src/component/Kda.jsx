import React from 'react'

export default function Kda() {
  return (
    <>
        <div className='float-right py-10'>
             {/* kda group */}
            <div className='flex flex-col w-full justify-center items-center'>
                {/* left: image */}
                <div className='w-full h-full flex flex-col space-y-3'>
                    <div className='pr-5'>
                        <div className='text-[33px] float-right font-black flex'>
                            <div className='flex flex-col items-center '>
                                <img 
                                className='w-[210px] h-[55px]'
                                src="https://i.namu.wiki/i/jyivQQdds0n-93WfnV_apKWOPf3MBsVgIrVLJeASzN2_07cgjVEGebrz0rM4m_9hxqMg3H8_h_mr5Gtys6Cj-hOqJoPncEsLQUK5c-63maaz77VpcRODt9Y4K9jD2I3U0yZaths-ZX8wVdnyeun2Hg.svg" alt="" />
                                <p className='w-fit pt-1 bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>K/DA 그룹</p>
                            </div>
                        </div>
                    </div>
                <img 
                    style={{
                        clipPath: 'polygon(5.5% 0, 100% 0, 100% 85%, 94.5% 100%, 25% 100%, 0 100%, 0 15%)',
                        objectPosition: '-1px -58px'
                    }}
                    className='h-[350px] w-[1210px] object-cover'
                    src="https://image.chosun.com/sitedata/image/201812/10/2018121000609_0.jpg" alt="" />
                </div>
                {/* right: member img band info */}
                <div className='w-full pt-10'>
                        <div className='grid grid-cols-3 gap-y-[80px] float-right gap-x-[70px]'>
                            {/* img */}
                                {/* 아리 */}
                            <div className='flex items-center'>
                                <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                    <img
                                    className='w-[185px] h-[185px] object-cover'
                                    src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/103028.jpg" alt="" />
                                </div>
                                <div className='pl-2 font-bold'>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>이름 : 아리</p>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>포지션 : 리더, 리드 보컬</p>
                                </div>
                            </div>
                                {/* 아칼리 */}
                            <div className='flex items-center'>
                                <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                    <img
                                    className='w-[185px] h-[185px] object-cover'
                                    src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/84032.jpg" alt="" />  
                                </div>
                                <div className='pl-2 font-bold'>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>이름 : 아칼리</p>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>포지션 : 메인 래퍼</p>
                                </div>
                            </div>
                                {/*이블린 */}
                            <div className='flex items-center'>
                                <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                    <img
                                    className='w-[185px] h-[185px] object-cover'
                                    src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/28015.jpg" alt="" />  
                                </div>
                                <div className='pl-2 font-bold'>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>이름 : 이블린</p>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>포지션 : 리드 보컬</p>
                                </div>
                            </div>
                            {/* 카이사 */}
                        <div className='flex items-center'>
                                <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                    <img
                                    className='w-[185px] h-[185px] object-cover'
                                    src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/145026.jpg" alt="" />
                                </div>
                                <div className='pl-2 font-bold'>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>이름 : 카이사</p>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>포지션 :  리드 댄서</p>
                                </div>
                        </div>
                            {/* 세라핀 */}
                            <div className='flex items-center'>
                                <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                    <img
                                    className='w-[185px] h-[185px] object-cover'
                                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8bd1c17cba18f90e/5f7fa5ecd4fbb50ef3077904/Seraphine_Skin_Explainer_Banner.jpg" alt="" />
                                </div>
                                <div className='pl-2 font-bold'>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>이름 : 세라핀</p>
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-500 to-blue-100 text-transparent'>포지션 : 객원 멤버</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}
