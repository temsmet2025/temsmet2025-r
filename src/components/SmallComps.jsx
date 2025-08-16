import {useEffect, useState} from 'react'

export const InfoCard = ({title, items}) => {
    return (
        <div className='flex flex-col gap-4'>
            <span className='text-sky-500 font-bold text-xl'>LOA #65536</span>
            {items.map((index, item) => (
                <div class="flex flex-col pl-2 border-l-4 border-l-sky-500">
                    {item.map((index, subitem) => (
                        <>
                            <span className='text-slate-950 font-semibold'>{item.label}</span>
                            <span className='text-gray-500'>{item.value}</span>
                        </>
                    ))}
                    
                </div>
            ))}
            
            <div className="flex flex-col border-l-4 border-l-sky-500 pl-2">
                <span className="text-slate-950 font-semibold">Signatory</span>
                <span className="text-gray-500">M. Devanathan</span>
            </div>
            <div className="flex flex-col border-l-4 border-l-sky-500 pl-2">
                <span className="text-slate-950 font-semibold">Contact Email</span>
                <span className="text-gray-500">devanathan.m@ieee.org</span>
            </div>
        </div>
    )
}

export const LatestUpdates = () => {
    const [loading, setLoading] = useState(true)
    const [news, setNews] = useState([])
    const API_URL = import.meta.env.VITE_API_URL + "latest_updates/"
    const bellIcon = (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bell h-4 w-4 sm:h-6 sm:w-6 text-primary"
        >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setNews(data);
                setLoading(false);
            }
            catch {
                setLoading(true)
            }   
        } 
        getNews(); 
        console.log("end point",news)
    }, [loading])

    return (
        <div className="bg-slate-950/70 flex items-center overflow-hidden">
            
            <div className="flex gap-10 items-center">

                <div className="flex gap-1 items-center text-xs sm:text-lg px-2 py-4 sm:p-4 text-amber-300 font-bold bg-sky-500 w-36 sm:w-52 z-20">
                    <span className="">{bellIcon}</span>
                    <div className="flex items-center ">
                        <span className=''>Latest Updates:</span>
                    </div>
                </div>                

                <div className="">
                    {!loading && (
                        <div className="">
                            {/* {console.log(loading)} */}
                            <div className="flex flex-row gap-5 text-gray-200 whitespace-nowrap animate-marquee-start-then-loop hover:[animation-play-state:paused] overflow-hidden z-10" >
                            {news.map((item, index) => (
                                <div key={index} className="flex gap-2 justify-center items-center">
                                    <span className='px-2 text-xs rounded-md' style={{backgroundColor: item.priority_colors}}>{ item.priority }</span>
                                    {item.link ? (
                                        <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sky-400 hover:text-sky-300 cursor-pointer flex items-center gap-1"
                                        >
                                        {item.news}
                                        <span className="text-xs text-sky-400">🔗</span>
                                        {index !== news.length - 1 && "|"}
                                        </a>
                                    ) : (
                                        <span key={index} className="hover:text-white z-10">
                                        {item.news} {index !== news.length - 1 && "|"}
                                        </span>
                                    )}
                                </div>
                                    
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export const HeadingBar = (props) => {
    return (
        <div className={`mt-2 h-0.5 bg-sky-700 ${props.classes !== undefined ? props.classes : ""}`}></div>
    )
}

export const SponsorPackageCard = ({ icon, tier_name, data, classes }) => {
    const tickMark = (<svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-check w-4 h-4 md:w-6 md:h-6 text-primary flex-shrink-0 text-sky-400"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>)
    return (
        <section className={`border-2 rounded-lg flex justify-center items-center ${tier_name=="Platinum" && 'border-blue-600'} w-[23.2rem] md:w-[17rem]  lg:w-[22rem] hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out `}>
            <div className='relative w-[23rem] md:max-w-[16.8] lg:w-[21.8rem] border-[1.2px] rounded-lg '>
                {tier_name == "Platinum" && (
                    <span className='absolute right-2 top-2 bg-blue-600 text-base cursor-pointer text-white px-2 py-1 rounded-lg hover:scale-105'>Most Popular</span>
                )}
                <div className={`flex flex-col items-center justify-center p-20 sm:p-8 lg:p-16 text-center text-white rounded-t-md ${classes}`}>
                    <span >{icon}</span>
                    <div className='flex flex-col items-center justify-center leading-5'>
                        <span>{tier_name}</span>
                        <span>₹8 Lakhs</span>
                    </div>
                    
                </div>
                <div>
                    <div className="flex flex-col py-12 px-3 md:p-3 lg:px-3 lg:py-5 lg:gap-3 leading-3">
                        {data.map((item, index) => (
                            <div className="flex flex-row text-base sm:text-sm md:text-base text-gray-700 gap-[0.2rem] justify-start items-center">
                                <span>{ tickMark }</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="download-btn flex justify-center items-center p-4">
                    <span className={`border-[1px] px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 text-white ${classes}`}><a href="./downloadable/Brochure.pdf" download="SponsorBrochure.pdf">Download Our Brochure</a></span>
                </div>
            </div>
        </section>
        
    )
}
