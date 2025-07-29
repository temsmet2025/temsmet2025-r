import React from 'react'
import { useEffect, useState } from 'react'
import { HeadingBar } from './SmallComps'

const Sidebar = () => {
    const API_URL = (import.meta.env.VITE_API_URL + "sponsor/?position=1") || 'http://localhost:8000/api/sponsor/?position=1';
    // const API_URL = 'http://localhost:8000/api/sponsor/?position=1';
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchSponsors = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json()
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const grouped = data.reduce((acc, sponsor) => {
                    const name = sponsor.tier_name;
                    if (!acc[name]) acc[name] = [];
                    acc[name].push(sponsor);
                    return acc;
                }, {});
                const groupedArray = Object.entries(grouped).map(([tier_name, sponsor]) => ({
                    tier_name,
                    sponsor,
                }));
                setData(groupedArray)
                setLoading(false)
            }
            catch (error) {
                console.error("Error fetching sponsors:", error);
                return;
            }
        };
        fetchSponsors();
    }, [loading])
  return (
      <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-4xl  sm:text-3xl sm:font-semibold text-sky-700">Sponsored By</span>
          <HeadingBar />
          {loading ? (
                // 👇 Skeleton or spinner
                <div className="flex flex-col gap-1 mt-10 animate-pulse">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-gray-200 rounded-lg p-4  w-full shadow-inner">
                            <div className="bg-gray-300 h-5 w-24 rounded-full mx-auto mb-3" />
                        </div>
                    ))}
                </div>
            ) : (
                data.map((sponsor, index) => (
                <div key={index} className="w-full flex flex-col gap-2 justify-center">
                    <h1 className='text-2xl text-center sm:font-semibold text-sky-700'>{sponsor.tier_name}</h1>
                    <div className='flex flex-col gap-1 justify-center items-center'>
                        {sponsor?.sponsor?.map((sponsor, index) => (
                            <a href={sponsor?.link} target="_blank">
                                    <img key={`inner-${index}`} loading='lazy' src={sponsor?.logo} alt="temsmet2025" />
                                </a>
                            ))}
                    </div>
                    
                    </div>
                ))
            )}

          
    </div>
  )
}

export default Sidebar