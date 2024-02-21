import React, { useEffect, useState } from 'react';
import Layout from './Layout';

export default function Items() {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/ko_KR/item.json";

    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData.data);
      })
      .catch((error) => {
        console.error('Error fetching item data:', error);
      });
  }, []);

  console.log(data);

  return (
    <Layout>
      <div className='w-full py-10 flex flex-col items-center justify-center bg-[#060606]'>
         {/* header */}
         <div 
            style={{clipPath: `polygon(0 0, 97.5% 0, 100% 32%, 100% 100%, 0 100%, 0% 50%)`}}
            className='w-full max-w-[1600px] bg-[#061C25] justify-center flex'>
                <div className='w-full flex items-center p-4 text-white'>
                    {/* title */}
                    <div className='w-[24%] border-r text-[40px] font-black border-white'>
                        <p className='float-right pr-12'>아이템</p>
                    </div>
                    {/* description */}
                    <div className='w-[76%] text-[17px] pl-12'>
                        <p>리그 오브 레전드 게임의 다양한 아이템</p>
                    </div>
                </div>
            </div>
        <div className='w-full max-w-[1300px] pt-[60px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {Object.keys(data).map((key) => (
            <div 
            style={{clipPath: 'polygon(0 0, 89% 0, 100% 23%, 100% 100%, 0 100%, 0% 50%)'}}
            key={key} 
            className='w-full h-full text-white bg-[#161616] flex'>
              <img 
              className='w-[90px] h-[90px]'
              src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${data[key].image.full}`} alt="" />
                <div className='w-full flex flex-col pl-2 justify-center items-center space-y-2' >
                    <div className='font-black text-[16px]'>
                        {data[key]?.name}
                    </div>
                    <div className='text-[12px] font-semibold'>
                        GOLD : {data[key]?.gold?.total}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
