import React from 'react'

export default function HeartSteel() {
  return (
    <>
    <div className='float-right'>
         {/* kda group */}
        <div className='flex flex-col w-full justify-center items-center'>
            {/* left: image */}
            <div className='w-full h-full flex flex-col space-y-3'>
                <div className='pr-5'>
                    <div className='text-[32px] float-right font-black flex'>
                        <div className='flex flex-col items-center '>
                            <img 
                            className='w-[220px] h-[58px]'
                            src="https://i.namu.wiki/i/7MaodsVcK-Im7sOTOdxTgq22zbZl2RvEjqKHPUtQdpUgJ2PjKjPq_xhlM1iiM3jA_-gc_q3pdFeKTtvnLs5IRATbajZdnBVY8JoQilolh7QosKM9UIxHTPKSNsOgT8Fx8Z5ZmAApjDPdThAFj9NPbw.svg" alt="" />
                            <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>하트스틸 그룹</p>
                        </div>
                    </div>
                </div>
            <img 
                style={{
                    clipPath: 'polygon(5.5% 0, 100% 0, 100% 85%, 94.5% 100%, 25% 100%, 0 100%, 0 15%)'}}
                className='h-[350px] w-[1210px]'
                src="https://i.namu.wiki/i/BmW_tIWzg8Jes_kSdCfJN1jISKiNXj8UoECQmJ7DBicOGG9c-mHmjlb7v1HEeo85QPTTb6IIOUglXVlVAZzBvg.webp" alt="" />
            </div>
            {/* right: member img band info */}
            <div className='w-full pt-10'>
                    <div className='grid grid-cols-3 gap-y-[80px] float-right gap-x-[70px]'>
                        {/* img */}
                            {/* 세트 */}
                        <div className='flex items-center'>
                            <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                <img
                                className='w-[185px] h-[185px] object-cover'
                                src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/875056.jpg" alt="" />
                            </div>
                            <div className='pl-2 font-bold'>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>이름 : 세트</p>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>포지션 : 리더, 래퍼</p>
                            </div>
                        </div>
                            {/* 요네 */}
                        <div className='flex items-center'>
                            <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                <img
                                className='w-[185px] h-[185px] object-cover'
                                src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/777045.jpg" alt="" />  
                            </div>
                            <div className='pl-2 font-bold'>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>이름 : 요네</p>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>포지션 : 프로듀서, DJ</p>
                            </div>
                        </div>
                            {/* 아펠리오스 */}
                        <div className='flex items-center'>
                            <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                <img
                                className='w-[185px] h-[185px] object-cover'
                                src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/523030.jpg" alt="" />  
                            </div>
                            <div className='pl-2 font-bold'>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>이름 : 아펠리오스</p>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>포지션 : 작사 · 작곡</p>
                            </div>
                        </div>
                        {/* 이즈리얼 */}
                    <div className='flex items-center'>
                            <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                <img
                                className='w-[185px] h-[185px] object-cover'
                                src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/81043.jpg" alt="" />
                            </div>
                            <div className='pl-2 font-bold'>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>이름 : 이즈리얼</p>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>포지션 :  메인 보컬</p>
                            </div>
                    </div>
                        {/* 케인 */}
                        <div className='flex items-center'>
                            <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                <img
                                className='w-[185px] h-[185px] object-cover'
                                src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/141020.jpg" alt="" />
                            </div>
                            <div className='pl-2 font-bold'>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>이름 : 케인</p>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>포지션 : 래퍼</p>
                            </div>
                        </div>
                         {/* 크산테 */}
                         <div className='flex items-center'>
                            <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                <img
                                className='w-[185px] h-[185px] object-cover'
                                src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/897008.jpg" alt="" />
                            </div>
                            <div className='pl-2 font-bold'>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>이름 : 크산테</p>
                                <p className='w-fit bg-gradient-to-b bg-clip-text from-green-600 to-purple-500 text-transparent'>포지션 : 리더, 보컬</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</>
  )
}
