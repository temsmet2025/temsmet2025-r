import React from 'react'
import { HeadingBar } from './SmallComps';

const Profiles = (props) => {
  const data = props.profiles;
  return (
    <div className="w-full">
      <h1 className="sm:text-3xl text-2xl text-sky-700 font-semibold mt-5 ml-2 sm:mt-10">{props.title}</h1>
      <HeadingBar />
      <div id={`profiles-${props.title}`} className='flex flex-wrap justify-center lg:justify-around' >
        {data?.map((profile, index) => (
          <div key={index}>
            <div id={`card-${profile.name}-${index}`} className="relative w-64 lg:w-96 h-96 lg:h-44 rounded-md border hover:rounded-xl hover:shadow-xl hover:bg-slate-300/80 hover:scale-105 transition-all duration-300 ease-in-out m-4 sm:m-5 group">
              <div className={`lg:hidden z-10 flex gap-1 absolute ${profile.bioData===undefined? 'left-1/2 bottom-2 -translate-x-1/2 lg:top-2 lg:right-2':'bottom-2 left-2'} text-sky-900`}>
                <a href={profile.link} target="_blank"  className={`${profile.link===undefined && "hidden"}  px-3 py-1 bg-[#0BA5CC]/20 rounded-md lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-[350ms] lg:ease-in`}> See Profile </a>
                <a href={profile.bioData} target="_blank"  className={`${profile.bioData===undefined && "hidden"} z-10 px-3 py-1 bg-[#0BA5CC]/20 rounded-md lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-[350ms] lg:ease-in`}> See Biodata </a>
              </div>
              <div className={`invisible lg:visible z-10 flex gap-1 absolute top-2 right-2 text-sm text-sky-900`}>
                <a href={profile.profile_link} target="_blank"  className={`${profile.profile_link===undefined && "hidden"}  px-3 py-1 bg-[#0BA5CC]/20 rounded-md lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-[350ms] lg:ease-in`}> See Profile </a>
                <a href={profile.bioData} target="_blank"  className={`${profile.bioData===undefined && "hidden"} z-10 px-3 py-1 bg-[#0BA5CC]/20 rounded-md lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-[350ms] lg:ease-in`}> See Biodata </a>
              </div>
              <div className="card-body w-64 lg:w-96 h-52 lg:h-44 absolute flex flex-col lg:flex-row justify-between items-center text-wrap ">
                <div className={`bg-slate-900/10 w-64 h-64 lg:w-96 lg:h-44 rounded-lg`}>
                  <img loading='lazy' src={profile.image_path === undefined ? `./orgCommittee/default.avif` :profile.image_path} alt={`temsmet2025-img-${profile.name}`} className={`w-64 h-52 lg:w-full lg:h-44 rounded-lg`} />
                </div>
                <div className=" text-amber-950 mt-2 p-3">
                  <p className='flex flex-col text-wrap text-center md:w-48'>
                    <span className="font-bold text-xl ">{profile.name}</span>
                    {profile.affiliation != "" && <span className='text-base md:text-sm' style={{whiteSpace:"pre-line"}}>{profile.affiliation}</span>}
                  </p> 
                </div>
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Profiles