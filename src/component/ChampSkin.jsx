import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ChampSkin() {
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
    <div className='w-full flex flex-col justify-center items-center space-y-4'>
      {championData.skins && championData.skins.map((skin, index) => (
        <div key={index} className='text-white text-[26px] font-bold'>
          <div className='pb-1'>{skin.name.replace('default', '기본 스킨')}</div>
          <img
            className='w-[920px] h-[570px]'
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`}
            alt={`Skin ${skin.num}`}
          />
        </div>
      ))}
    </div>
  );
}
