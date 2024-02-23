import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../lib/ChampSkin.css';

const ChampSkin = () => {
  const { id } = useParams();
  const [championData, setChampionData] = useState({});
  const [hoveredSkin, setHoveredSkin] = useState(0);
  const [isMouseOverImage, setIsMouseOverImage] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageCache, setImageCache] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.3.1/data/ko_KR/champion/${id}.json`);
        const jsonData = await response.json();
        setChampionData(jsonData.data[id]);
      } catch (error) {
        console.error('챔피언 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    championData.skins?.forEach((skin, index) => {
      const img = new Image();
      img.onload = () => setImageCache((prevCache) => ({ ...prevCache, [index]: true }));
      img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`;
    });
  }, [id, championData.skins]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isMouseOverImage) {
        event.preventDefault();
        const delta = event.deltaY;

        setHoveredSkin((prevHoveredSkin) => {
          const totalSkins = championData.skins?.length || 0;
          return (prevHoveredSkin + (delta > 0 ? 1 : -1) + totalSkins) % totalSkins;
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isMouseOverImage, championData.skins]);

  const handleMouseEnter = () => setIsMouseOverImage(true);
  const handleMouseLeave = () => {
    setIsMouseOverImage(false);
    window.scrollTo(0, window.scrollY);
  };

  useEffect(() => {
    setImageLoaded(imageCache[hoveredSkin]);
  }, [hoveredSkin, imageCache]);

  return (
    <div className='w-full flex flex-col justify-center items-center space-y-4 py-5 pb-[55px]'>
      {championData.skins && championData.skins.length > 0 && (
        <div
          key={hoveredSkin}
          className='text-white text-[41px] font-bold space-y-1'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='pb-1'>{championData.skins[hoveredSkin]?.name.replace('default', '기본 스킨')}</div>
          <div className='flex items-center img_hover'>
            {imageLoaded ? (
              <img
                className='w-[1000px] h-[600px] champ-image rounded-md'
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${championData.skins[hoveredSkin]?.num}.jpg`}
                alt={`스킨 ${championData.skins[hoveredSkin]?.num}`}
              />
            ) : (
              <div className='placeholder-content'>Loading...</div>
            )}
            <div className='font-bold flex flex-col justify-center items-center text-slate-300 pl-3 text-[18px]'>
              <div className='text-[13px]'>
                <p>스</p>
                <p>크</p>
                <p>롤</p>
              </div>
              <p>↕</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChampSkin;
