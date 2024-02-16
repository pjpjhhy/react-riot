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
      <div className='w-full py-14 flex justify-center bg-[#060606]'>
        <div className='w-full max-w-[1300px] grid grid-cols-5 gap-6'>
          {Object.keys(data).map((key) => (
            <div 
            style={{clipPath: 'polygon(0 0, 89% 0, 100% 23%, 100% 100%, 0 100%, 0% 50%)'}}
            key={key} 
            className='w-full h-full text-white bg-[#121212] flex'>
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
