import React from 'react'
import { useEffect, useState } from 'react'
import { HeadingBar } from './SmallComps'

const Sidebar = () => {
    const API_URL = (import.meta.env.VITE_API_URL + "sponsor/?position=1") || 'http://localhost:8000/api/sponsor/?position=1';
    // const API_URL = 'http://localhost:8000/api/sponsor/?position=1';
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const scrollToSection = (id) => {
        const timer = setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
            const rect = element.getBoundingClientRect();
            window.scroll({
                top: window.scrollY + rect.top,
                behavior: "smooth",
            });
            }
        }, 0);
    };
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
      <div className="sm:sticky sm:top-52 h-[90vh] overflow-y-auto flex flex-col justify-start items-center gap-2 w-full">
          <span className="text-3xl sm:text-2xl sm:font-semibold text-sky-700">Conference Partners</span>
          <HeadingBar classes="w-full mt-1"/>
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
                            <a key={index} href={sponsor?.link} target="_blank">
                                    <img key={`inner-${index}`} loading='lazy' src={sponsor?.logo} alt="temsmet2025" />
                                </a>
                            ))}
                    </div>
                    
                    </div>
                ))
            )}
          <div className="download-btn mt-10 bg-sky-200/20 flex flex-col justify-center items-center p-2 py-5 border-[1px] border-dashed border-sky-400 rounded-md">
              <div className='p-5 rounded-full border-2 bg-sky-600/10 mb-3'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trophy text-conference-teal text-sky-500"
                >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <span className='text-xl font-bold text-sky-500'>Become A Sponsor</span>
              <span className='text-center text-sm text-gray-400 font-semibold'>Click to show your logo and support the conference!</span>
                  <a className={`border-[1px] cursor-pointer flex flex-row justify-center items-center gap-1 px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-white bg-sky-500`} href="./downloadable/Brochure.pdf" download="SponsorBrochure.pdf">
                  <span className='text-sm'>Download Brochure</span>
                  
                  <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                        >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                  </span>
              </a>
              <span
                  onClick={(e)=>scrollToSection("footer")}
                  className='text-sm mt-1 border-[1px] cursor-pointer flex flex-row justify-center items-center gap-1 px-[3.25rem] py-2 rounded-md hover:scale-105 transition-all duration-300 bg-white text-sky-500'
              >
                  Contact Us
              </span>
        </div>
          
    </div>
  )
}

export default Sidebar