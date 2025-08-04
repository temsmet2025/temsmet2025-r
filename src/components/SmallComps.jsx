import React from 'react'

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
