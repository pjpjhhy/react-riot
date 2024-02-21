import React from 'react'

export default function Pentakill() {
  return (
    <>
      {/* pentakill band */}
      <div className='flex flex-col group w-full justify-center items-center'>
                    {/* left: image */}
                    <div className='w-full h-full flex flex-col space-y-3'>
                        <div className='text-[29px] font-black flex'>
                            <div className='flex flex-col items-center'>
                                    <img 
                                    className='w-[250px] h-[60px] group-hover:scale-110 duration-300'
                                    src="https://i.namu.wiki/i/JauvSC7K5Au--lc0WH8ONNZT0em1L9EC-eHUhQzMbXZGgDKEFkCfOqJ4kbqUQ8kgA815BHa0WEX1Dpa6tRNMvCme6L_pzOMDGNokzM9_OBJ8IP8Jxd0UF4SqnZKT0UFCsItdtN2y_WEGkP09RyiHKw.svg" alt="" />
                                    <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>펜타킬 밴드</p>
                            </div>
                        </div>
                        <img 
                            style={{clipPath: 'polygon(5.5% 0, 100% 0, 100% 85%, 94.5% 100%, 25% 100%, 0 100%, 0 15%)'}}
                            className='h-[350px] w-[1210px]'
                            src="https://i.namu.wiki/i/pawQnH8DuEX-mc11o3lbRw1iweOLeJNsTV0AMj2snjA3mzQtUAWBDPzpwHCSczAVLbrTfNNH5bA2hySmgC3BLg.webp" alt="" />
                    </div>
                    {/* right: member img band info */}
                    <div className='w-full pt-10'>
                            <div className='grid grid-cols-4 gap-y-[80px]'>
                                {/* img */}
                                    {/* 카서스 */}
                                <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/30004.jpg" alt="" />
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 카서스</p>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 리드 보컬</p>
                                    </div>
                                </div>
                                    {/* 모데카이저 */}
                                <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/82003.jpg" alt="" />  
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 모데카이저</p>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 리드 기타</p>
                                    </div>
                                </div>
                                    {/*소나 */}
                                <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/37002.jpg" alt="" />  
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 소나</p>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 키보드</p>
                                    </div>
                                </div>
                                {/* 요릭 */}
                              <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/83002.jpg" alt="" />
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 요릭</p>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 베이스 기타</p>
                                    </div>
                              </div>
                                {/* 올라프 */}
                               <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/2004.jpg" alt="" />
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 올라프</p>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 드럼</p>
                                    </div>
                               </div>
                                {/* 케일 */}
                               <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/10009.jpg" alt="" />
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 케일</p>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 여성 보컬</p>
                                    </div>
                               </div>
                                {/* 비에고 */}
                              <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover object-center'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/234010.jpg" alt="" />
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>이름 : 비에고</p>
                                        <p className='w-fit bg-gradient-to-b bg-clip-text from-black to-red-700 text-transparent'>포지션 : 보컬(객원 멤버)</p>
                                    </div>
                              </div>
                            </div>
                    </div>
                </div>
    </>
  )
}
