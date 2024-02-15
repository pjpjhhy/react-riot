import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';

export default function ChampDetail() {
  const [championData, setChampionData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/ko_KR/champion/${id}.json`;
        const response = await fetch(url);
        const jsonData = await response.json();

        setChampionData(jsonData.data[id]);
      } catch (error) {
        console.error('Error fetching champion data:', error);
      }
    };

    fetchData();
  }, [id]);

  console.log(championData);


  return (
    <Layout>
      <div className='w-full flex flex-col justify-center items-center'>
        {/* backdrop image */}
        <div className='w-full flex h-[750px] relative'>
          <img
            className='w-full h-full brightness-[28%]'
            src="https://c.wallhere.com/photos/9d/e2/1920x1080_px_League_Of_Legends-680018.jpg!d"
            alt=""
          />
        </div>
        {/* champ info */}
        <div className='absolute flex w-full max-w-7xl  '>
          {/* image */}
          <div className='w-full flex pb-[150px]'>
            <img 
            className='w-[180px] h-[180px]'
            src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${championData?.image?.full}`} alt="" />
            {/* info */}
              <div className='w-full text-white flex flex-col text-3xl pl-[50px] pt-1 space-y-4'>
                {/* 챔피언 이름 */}
                <div className='font-black flex items-center'>
                    {championData?.name}
                    <div className='text-sm pl-2'>
                      ({championData?.title})
                    </div>
                </div>
                {/* 챔피언 배경 */}
                <div className=' text-sm'>
                    {championData?.blurb}
                </div>
                {/* 패시브 */}
                <div className='flex flex-col w-[700px]'>
                  <p className='text-[17px] py-1 font-semibold'>패시브 : {championData?.passive?.name}</p>
                  <div className='flex space-x-4'>
                    <img 
                    className='w-[50px] h-[50[px] rounded-lg'
                    src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/passive/${championData?.passive?.image?.full}`} alt="" />
                    <div className='text-xs whitespace-pre-wrap'>
                      {championData?.passive?.description?.replace('<br>', ('\n')).replace('<br>', '').replace('<physicalDamage>', '').replace('</physicalDamage>', '').replace('<magicDamage>', '').replace('</magicDamage>', '')  }
                    </div>
                  </div>
                </div>
                {/* 챔피언 스킬 */}
                  <div className='flex'>
                    <div className='flex flex-col'>
                      {/* 스킬 이미지 */}
                      <div>
                        {/* <img src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${championData?.spells[0]?.image?.full}`} alt="" /> */}
                      </div>
                      {/* 스킬 이름 및 효과 */}
                      <div>
                        {/* {championData?.spells[0]?.name} */}
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        {/* champ skins */}
        {/* <ChampSkin/> */}
      </div>
    </Layout>
  );
}
