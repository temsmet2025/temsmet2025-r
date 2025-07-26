import React from 'react'
import { useEffect, useState } from 'react'
import { HeadingBar } from './SmallComps'

const Sidebar = () => {
    const API_URL = (import.meta.env.VITE_API_URL + "sponsor/?position=1") || 'http://localhost:8000/api/sponsor/?position=1';
    // const API_URL = 'http://localhost:8000/api/sponsor/?position=1';
    const [diamond, setDiamond] = useState()
    const [gold, setGold] = useState()
    useEffect(() => {
        const fetchSponsors = async () => {
            const response_gold = await fetch(API_URL+"&tier_name=gold");
            const response_diamond = await fetch(API_URL+"&tier_name=diamond");
            const gold_data = await response_gold.json()
            const diamond_data = await response_diamond.json()
            setGold(gold_data)
            setDiamond(diamond_data)
        };
        fetchSponsors();
    }, [])
  return (
      <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-4xl  sm:text-3xl sm:font-semibold text-sky-700">Sponsored By</span>
          <span className="text-2xl font-semibold text-sky-700">Diamond Sponsors</span>
          {diamond?.map((sponsor, index) => (
              <div key={index} className="w-full flex flex-col gap-2 justify-center">
                    <img loading='lazy' src={sponsor.logo} alt="" />
                </div>
          ))}
          <span className="text-2xl font-semibold text-sky-700">Gold Sponsors</span>
          {gold?.map((sponsor, index) => (
              <div key={index} className="w-full flex flex-col gap-2 justify-center">
                    <img loading='lazy' src={sponsor.logo} alt="" />
                </div>
            ))}
    </div>
  )
}

export default Sidebar