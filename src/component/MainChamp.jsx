import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
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

  return (
    <div className="w-full flex justify-center py-2 space-y-2">
     <div className="w-full max-w-7xl flex flex-col justify-center space-y-2 items-center">
       <div className="w-full flex">
        <h1 className="font-black text-4xl flex">챔피언</h1>
       </div>
       <Link to="champion"><div className="flex gap-5 overflow-x-auto w-[1250px]">
          {data && Object.keys(data).slice(0, 35).map(championId => {
            const champion = data[championId];
            const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`;

            return (
                <div key={championId} className="flex-shrink-0 group py-1">
                  <img className="w-[180px] h-[290px]" src={imageUrl} alt={champion.name} />
                  <p className="font-mono text-lg font-black pl-5 group-hover:pl-8 bg-[#061C25] group-hover:bg-[#006680] duration-300 text-white p-2">{champion.name}</p>
                </div>
            );
          })}
        </div></Link>
      </div>
    </div>
  );
}
