import React from 'react'
import { HeadingBar } from './SmallComps';

const Profiles = (props) => {
  const data = props.profiles;
  return (
    <div className="w-full">
      <h1 className="sm:text-3xl text-2xl text-sky-700 font-semibold mt-5 ml-2 sm:mt-10">{props.title}</h1>
      <HeadingBar />
      <div id={`profiles-${props.title}`} className='flex flex-wrap justify-center lg:justify-around' >
        {data.map((profile, index) => (
          <a href={profile.link} target="_blank" key={index}>
            <div id={`card-${profile.name}-${index}`} className="relative cursor-pointer w-64 lg:w-96 h-96 lg:h-44 rounded-md border hover:rounded-xl hover:shadow-xl hover:bg-slate-300/80 hover:scale-105 transition-all duration-300 ease-in-out m-4 sm:m-5">
              <div className="card-body w-64 lg:w-96 h-52 lg:h-44 absolute flex flex-col lg:flex-row justify-between items-center text-wrap ">
                <div className="bg-slate-900/10 w-64 h-64 lg:w-96 lg:h-44 rounded-lg">
                  <img src={profile.imagePath} alt={`img-${profile.name}`} className='w-64 h-52 lg:w-96 lg:h-44 rounded-lg' />
                </div>
                <div className="details text-amber-950 mt-2 p-3">
                  <p className='flex flex-col text-wrap text-center md:w-48'>
                    <span className="font-bold text-xl ">{profile.name}</span>
                    {profile.affiliation != "" && <span className='text-base md:text-sm'>{profile.affiliation}</span>}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Profiles