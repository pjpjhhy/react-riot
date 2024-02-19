import React from 'react'

export default function News() {
  return (
    <>
      <div className='w-full flex justify-center'> 
        <div className='w-full max-w-7xl py-12 flex flex-col space-y-3'>
            {/* title */}
            <div className="w-full flex">
                <h1 className="font-black text-4xl flex">새로운 소식</h1>
            </div>
            {/* new news */}
            <div className='w-full grid grid-cols-2 gap-x-[10px] gap-y-[50px] pl-8'>
                <div className='flex w-[500px] h-[200px] space-x-3 border border-slate-400'>
                    {/* img */}
                    <div className='w-2/5 h-full'>
                        <img 
                        className='w-full h-full'
                        src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4edc6fa43cc798d8/65bc6779fd23e5d5337db533/Divine-Heavenscale-Lee-Sin---Final.jpg?quality=90&crop=1%3A1&width=720" alt="" />
                    </div>
                    {/* description */}
                    <div className='w-3/5 h-full space-y-2 flex flex-col p-2'>
                        <p className='text-xs font-semibold text-[#BcBcBc]'>게임 업데이트</p>
                        <h1 className='font-black text-xl'>14.3 패치 상점 소식</h1>
                        <p className=' font-medium text-sm'>고귀한 용족의 존재를 만끽하세요.</p>
                    </div>
                </div>
                <div className='flex w-[500px] h-[200px] space-x-3 border border-slate-400'>
                    {/* img */}
                    <div className='w-2/5 h-full'>
                        <img 
                        className='w-full h-full'
                        src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07cc3a4f8c68a4f4/65c2d813d6cf044d1a152212/020624_LNY24_music-theme_no_text_1920x1080_RK.jpg?quality=90&crop=1%3A1&width=720" alt="" />
                    </div>
                    {/* description */}
                    <div className='w-3/5 h-full space-y-2 flex flex-col p-2'>
                        <p className='text-xs font-semibold text-[#BcBcBc]'>미디어</p>
                        <h1 className='font-black text-xl'>2024 설맞이 축제 공식 테마</h1>
                        <p className=' font-medium text-sm'>2024 설맞이 축제의 공식 음악테마와 함께 마음을 움직이는 용의 영혼을 느껴보세요.</p>
                    </div>
                </div>
                <div className='flex w-[500px] h-[200px] space-x-3 border border-slate-400'>
                    {/* img */}
                    <div className='w-2/5 h-full'>
                        <img 
                        className='w-full h-full'
                        src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt84a53cac88bcdf1d/65971771b6f924d7dcbe284e/Smolder-Header.jpg?quality=90&crop=1%3A1&width=480" alt="" />
                    </div>
                    {/* description */}
                    <div className='w-3/5 h-full space-y-2 flex flex-col p-2'>
                        <p className='text-xs font-semibold text-[#BcBcBc]'>개발자 블로그</p>
                        <h1 className='font-black text-xl'>챔피언 기획 해설: 스몰더</h1>
                        <p className=' font-medium text-sm'>대담한 용족 귀염둥이 원거리 딜러입니다.</p>
                    </div>
                </div>
                <div className='flex w-[500px] h-[200px] space-x-3 border border-slate-400'>
                    {/* img */}
                    <div className='w-2/5 h-full'>
                        <img 
                        className='w-full h-full object-cover'
                        src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0f8c92289c80bb29/65c13e5ace84adc061e33ebc/2524_Prime_Gaming_T1_Decluttered_(1600_x_1080).jpg" alt="" />
                    </div>
                    {/* description */}
                    <div className='w-3/5 h-full space-y-2 flex flex-col p-2'>
                        <p className='text-xs font-semibold text-[#BcBcBc]'>커뮤니티</p>
                        <h1 className='font-black text-xl'>마지막 prime 보상: 2월 9일~3월 15일</h1>
                        <p className=' font-medium text-sm'>prime Gaming을 통해 수수께끼 와드 스킨 및 추가 혜택을 받으세요.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
