import React from 'react'

export default function Kda() {
  return (
    <>
    {/* kda group */}
    <div className='flex flex-col w-full justify-center items-center'>
        {/* left: image */}
        <div className='w-full h-full flex flex-col space-y-3'>
        <div className='text-[29px] font-black flex'>
            <div className='flex flex-col items-center'>
                    <img 
                    className='w-[200px] h-[50px]'
                    src="https://i.namu.wiki/i/jyivQQdds0n-93WfnV_apKWOPf3MBsVgIrVLJeASzN2_07cgjVEGebrz0rM4m_9hxqMg3H8_h_mr5Gtys6Cj-hOqJoPncEsLQUK5c-63maaz77VpcRODt9Y4K9jD2I3U0yZaths-ZX8wVdnyeun2Hg.svg" alt="" />
                    <p className='w-fit bg-gradient-to-b bg-clip-text from-blue-400 to-white text-transparent'>K/DA 그룹</p>
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
                <div className='grid grid-cols-3 gap-y-[80px]'>
                    {/* img */}
                        {/* 아리 */}
                    <div className='flex items-center'>
                        <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                            <img
                            className='w-[185px] h-[185px] object-cover'
                            src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/103028.jpg" alt="" />
                        </div>
                        <div className='pl-2 font-bold'>
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 카서스</p>
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 리드 보컬</p>
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
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 모데카이저</p>
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 리드 기타</p>
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
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 소나</p>
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 키보드</p>
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
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 요릭</p>
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 베이스 기타</p>
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
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 올라프</p>
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 드럼</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  </>
  )
}
