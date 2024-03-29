import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import ChampSkin from './ChampSkin';

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
      <>
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
        <div className='absolute flex w-full max-w-7xl'>
          {/* image */}
          <div className='w-full flex pt-[50px] '>
            {Object.keys(championData).length > 0 ? (
              <>
                <img
                  className='w-[200px] h-[200px]'
                  src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${championData.image.full}`}
                  alt=""
                />
                {/* info */}
                <div className='w-full text-white flex flex-col text-3xl pl-[50px] pt-1 space-y-4'>
                  {/* 챔피언 이름 */}
                  <div className='font-black flex items-center'>
                    {championData.name}
                    <div className='text-sm pl-2'>
                      ({championData.title})
                    </div>
                  </div>
                  {/* 챔피언 배경 */}
                  <div className='text-sm '>
                    {championData.blurb}
                  </div>
                  {/* 패시브 */}
                  <div className='flex flex-col w-[700px]'>
                    {championData.passive && (
                      <>
                        <p className='text-[18px] py-1 font-semibold'>패시브 : {championData.passive.name}</p>
                        <div className='w-[792px] flex space-x-4  bg-opacity-55 bg-slate-900 h-full p-1'>
                          <img
                            className='w-[50px] h-[50[px] rounded-lg'
                            src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/passive/${championData.passive.image.full}`}
                            alt=""
                          />
                          <div className='text-xs whitespace-pre-wrap flex items-center '>
                            {championData.passive.description.replaceAll('<br>', '').replaceAll("<font color='#C200E1'>", '').replaceAll("<keywordName>", '').replaceAll("</keywordName>", '').replaceAll("<passive>", '').replaceAll("</passive>", '').replaceAll("<spellName>", '').replaceAll("</spellName>", '').replaceAll("<font color='#cccc00'>", '').replaceAll("<mainText>", '').replaceAll("</mainText>", '').replaceAll("<status>", '').replaceAll("</status>", '').replaceAll("<font color='#BBFFFF'>", '').replaceAll("<font color='#FFF673'>", '').replaceAll("<keywordMajor>", '').replaceAll("<font color='#669900'>", '').replaceAll("<font color='#fe5c50'>", '').replaceAll("<font color='#ee91d7'>", '').replaceAll("<font color='#8484fb'>", '').replaceAll("</keywordMajor>", '').replaceAll("<healing>", '').replaceAll("</healing>", '').replaceAll("<speed>", '').replaceAll("</speed>", '').replaceAll('<physicalDamage>', '').replaceAll('</physicalDamage>', '').replaceAll('<magicDamage>', '').replaceAll('</magicDamage>', '').replaceAll('</font>', '').replaceAll("<font color='#9b0f5f'>", '').replaceAll("<font color='#3458eb'>", '').replaceAll("<font color='#FF9900'>", '')}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  {/* 챔피언 스킬 */}
                  <div className='flex flex-col space-y-1'>
                    <p className='text-[22px] font-semibold'> 챔피언 스킬</p>
                    {championData.spells.map((spell, index) => (
                      <div key={index} className='flex space-x-5 bg-opacity-55  bg-slate-900 w-[792px] h-full items-center'>
                        <div className='flex space-x-4 items-center p-2'>
                          {/* 스킬 이미지 */}
                          <div className=''>
                            <img 
                            className='w-[60px] h-[60px] rounded-lg'
                            src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${spell.image.full}`} alt="" />
                          </div>
                          {/* 스킬 이름 및 효과 */}
                          <div className='text-[18px] flex flex-col w-[700px] justify-center'>
                            <div>
                              {spell.name}
                            </div>
                            <div className='text-[12px] leading-5'>
                              {spell.description.replaceAll('<br>', '').replaceAll('</keywordMajor>', '').replaceAll("<status>", '').replaceAll("<font color='#6655CC'>", '').replaceAll("<font color='#99FF99'>", '').replaceAll("<font color='#FF9900'>", '').replaceAll("</status>", '').replaceAll("<factionIonia1>", '').replaceAll("</factionIonia1>", '').replaceAll("<spellName>", '').replaceAll("</spellName>", '').replaceAll("</passive>", '').replaceAll("<passive>", '').replaceAll("</active>", '').replaceAll("<active>", '').replaceAll("<font color='#FF3300'>", '').replaceAll('</font>', '').replaceAll("<font color='#cd90ee'>", '').replaceAll("<font color='#9b0f5f'>", '').replaceAll("<keywordMajor>", '').replaceAll("<OnHit>", '').replaceAll("</OnHit>", '').replaceAll("<font color='#FFFFFF'>", '').replaceAll("<font color='#00DD33'>", '').replaceAll("<font color='#91d7ee'>", '').replaceAll("<font color='#FFF673'>", '').replaceAll("<font color='#669900'>", '')}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
  
        </div>
      </div>
        {/* champ skins */}
          <div className='w-full py-1 bg-[#060505] flex justify-center items-center'>
           <ChampSkin/>
          </div>
      </>
    </Layout>
  );
  
}
