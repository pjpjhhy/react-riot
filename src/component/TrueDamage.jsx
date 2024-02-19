import React from 'react'

export default function TrueDamage() {
  return (
    <>
     {/* pentakill band */}
     <div className='flex flex-col w-full justify-center items-center py-14'>
                    {/* left: image */}
                    <div className='w-full h-full flex flex-col space-y-3'>
                        <div className='text-[31px] font-black flex'>
                            <div className='flex flex-col items-center'>
                                    <img 
                                    className='w-[250px] h-[60px]'
                                    src="https://i.namu.wiki/i/8x9eHWw0bP7axdLuAhtN6gzyBexd6D_Oaze97p9wT9iHhx31_Vr-RDSMvwwwW954EDqAhSVqb3dtqCzYr4FG4qdNiKyQPLlJXnv4uwOrpR5zHTO2Qe607RRBV9l4KqppdVngDlYZRsdV9qt59Pa3qg.svg" alt="" />
                                    <p className='w-fit pt-1 bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>트루 데미지</p>
                            </div>
                        </div>
                        <img 
                    style={{
                        clipPath: 'polygon(5.5% 0, 100% 0, 100% 85%, 94.5% 100%, 25% 100%, 0 100%, 0 15%)'}}
                    className='h-[350px] w-[1210px] '
                    src="https://mblogthumb-phinf.pstatic.net/MjAxOTExMTBfMTcw/MDAxNTczMzkzMTEyMTUw.N6oVPKBRPfWsOCKOq9GaRHz6-mM4__LZnBvCs6I8c3kg.UxHPA4o6qWieCfospIZK8NtueCHzlbVayNOrz_mI8O4g.JPEG.rnjsdyd2009/1573393113462.jpg?type=w800" alt="" />
                    </div>
                    {/* right: member img band info */}
                    <div className='w-full pt-10'>
                            <div className='grid grid-cols-3 gap-y-[80px]'>
                                {/* img */}
                                    {/* 야스오 */}
                                <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/157018.jpg" alt="" />
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>이름 : 야스오</p>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>포지션 : 프로듀서</p>
                                    </div>
                                </div>
                                    {/* 에코 */}
                                <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/245019.jpg" alt="" />  
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>이름 : 에코</p>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>포지션 : 메인 래퍼</p>
                                    </div>
                                </div>
                                    {/*세나*/}
                                <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/235001.jpg" alt="" />  
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>이름 : 세나</p>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>포지션 : 래퍼</p>
                                    </div>
                                </div>
                                {/* 키아나 */}
                              <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-splashes/246002.jpg" alt="" />
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>이름 : 키아나</p>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>포지션 : 래퍼</p>
                                    </div>
                              </div>
                                {/* 아칼리 */}
                               <div className='flex items-center'>
                                    <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                                        <img
                                        className='w-[185px] h-[185px] object-cover'
                                        src="https://cdn-store.leagueoflegends.co.kr/images/v2/champion-tiles/84015.jpg" alt="" />
                                    </div>
                                    <div className='pl-2 font-bold'>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>이름 : 아칼리</p>
                                        <p className='w-fit bg-gradient-to-r bg-clip-text from-blue-600 to-orange-600 text-transparent'>포지션 : 리더, 래퍼</p>
                                    </div>
                               </div>
                            </div>
                    </div>
                </div>
    </>
  )
}
