import React from 'react'
import { useEffect, useState } from "react";

export default function ChampSkin() {
    const [data, setData] = useState();

    useEffect(() => {
      const url = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/ko_KR/champion.json";
  
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
          setData(jsonData.data);
        })
        .catch((error) => {
          console.error('Error fetching champion data:', error);
        });
      }, []);
      console.log(data)
      
  return (
    <div className="w-full flex justify-center py-12">
    <div className="w-full max-w-7xl grid grid-cols-5 gap-8">
      {data && Object.keys(data).map(championId => {
        const champion = data[championId];
        const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_1.jpg`;
        return (
        <div className="group overflow-hidden relative shadow-xl" key={championId}>
          <img
              src={imageUrl}
              alt={champion.name}
            />
          </div>
        );
      })}
    </div>
  </div>
  )
}
