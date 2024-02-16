import React from 'react'
import Layout from './Layout'

export default function Esport() {
  return (
    <Layout>
        <div className='w-full flex justify-center py-10'>
            {/* header */}
            <div 
            style={{clipPath: `polygon(0 0, 97.5% 0, 100% 32%, 100% 100%, 0 100%, 0% 50%)`}}
            className='w-full max-w-[1600px] bg-[#061C25] justify-center flex'>
                <div className='w-full flex items-center p-4 text-white'>
                    {/* title */}
                    <div className='w-[24%] border-r text-[40px] font-black border-white'>
                        <p className='float-right pr-12'>e스포츠</p>
                    </div>
                    {/* description */}
                    <div className='w-[76%] text-[17px] pl-12'>
                        <p>전 세계를 무대로 펼쳐지는 리그 오브 레전드의 e스포츠 소식</p>
                    </div>
                </div>
            </div>
        </div>
        {/* news info */}
        <div className='w-full flex justify-center py-10'>
            <div className='w-full max-w-7xl flex justify-center pb-[100px] '>
               <div className='grid grid-cols-3 gap-x-[100px] gap-y-[140px]'>
                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt01ade295d8c1d42e/65a7a77ec3bf0607abfdebdd/TFT_Set10_Championship_Announcement_Header_KR.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>전략적 팀 전투 리믹스 럼블 챔피언을 대비하세요!</p>
                            <p className='text-sm font-black pt-1'>전략적 팀 전투 e스포츠 팀 - 4주 전</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6730770e9b5bd434/65a19eeed6cafb6594f7584b/HOL_Textless_Thumbnail.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>전설의 전당 소개</p>
                            <p className='text-sm font-black pt-1'>LoL Esport Staff - 지난달</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb916e33c352f2996/6577a3923a0a126f8b961138/121323_TFT_LV_Winner_Banner_v2.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>Milala님이 전략적 팀 전투 베이거스 오픈 챔피언으로 등극했습니다!</p>
                            <p className='text-sm font-black pt-1'>전략적 팀 전투 e스포츠 팀 - 2개월 전</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7cf4ac8909fa1f7f/656941e341d57483e5c80e65/TFT_TVO_PrimerArticle_Header.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>전략적 팀 전투 베이거스 오픈에 대해 알아야 할 모든 것</p>
                            <p className='text-sm font-black pt-1'>전략적 팀 전투 e스포츠 팀 - 2개월 전</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt948f0c24757f77c3/6564e132867c0b48c3389788/Moments_and_Memories_2023_Thumbnail_Textless.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>순간들과 기억들 | 2023 월드 챔피언쉽</p>
                            <p className='text-sm font-black pt-1'>3개월 전</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc497ddfddc6b08f5/65496612a1a3d4040a751678/110823_RRC_Winner_Banner_v2.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>Titel님이 룬테라 리포지드 챔피언으로 등극했습니다!</p>
                            <p className='text-sm font-black pt-1'>전략적 팀 전투 e스포츠 팀 - 3개월 전</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt36d0919d803e1b0c/65417004fcd0c4001bf29971/110223_TFT_RRC_EventLeadInArticle_Banner.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>룬테라 리포지드 챔피언쉽: 출전 선수 및 방송 출연진</p>
                            <p className='text-sm font-black pt-1'>전략적 팀 전투 e스포츠 팀 - 3개월 전</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blteaf84a8f39159dc4/65405106a6f13604076c6bbd/110223_TFT_RRC_Banner.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>챔피언십 관심 집중</p>
                            <p className='text-sm font-black pt-1'>3개월 전</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[425px] h-[340px] cursor-pointer'>
                        {/* news img */}
                        <div className='w-full h-3/4 overflow-hidden'>
                            <img 
                            className='w-full h-full hover:scale-110 duration-300'
                            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3f2150ae64a4b176/6531e8003fc0c8d492c954a9/102523_PrimerGraphics_Banner.jpg" alt="" />
                        </div>
                        {/* news description */}
                        <div className='w-full h-1/4 pl-3 space-y-1'>
                            <p className='text-xs pt-1 text-[#0BC6E3] font-black'>e스포츠</p>
                            <p className='text-2xl font-black'>전략적 팀 전투 룬테라 리포지드 챔피언십 공지</p>
                            <p className='text-sm font-black pt-1'>4개월 전</p>
                        </div>
                 </div>
               </div>
            </div>
        </div>
    </Layout>
  )
}
