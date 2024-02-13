import { useEffect, useState } from "react";
import Layout from "../component/Layout";
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
    console.log(data)

  return (
    <Layout>
      <div className="w-full flex justify-center py-12">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {data && Object.keys(data).map(championId => {
            const champion = data[championId];
            const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`;

            return (
              <Link to= {`/champdetail/${champion.id}`}><div className="group overflow-hidden relative shadow-xl" key={championId}>
             <img
                  className="w-full h-[415px] object-cover duration-300 transform group-hover:scale-105"
                  src={imageUrl}
                  alt={champion.name}
                  onMouseOver={(e) => e.currentTarget.style.clipPath = 'none'}
                  onMouseOut={(e) => e.currentTarget.style.clipPath = 'polygon(0 0, 87% 0, 100% 7%, 100% 100%, 0 100%, 0% 50%)'}
                />
                <p className="absolute bottom-0 left-0 right-0 p-5 font-mono text-lg font-black pl-5 group-hover:pl-8 text-white bg-[#061C25] group-hover:bg-[#006680] duration-300">
                  {champion.name}
                </p>
              </div></Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
