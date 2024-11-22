import React from 'react'

const Profiles = (props) => {
  const  data = props.profiles;
  return (
    <div className="w-full  sm:m-10">
          <h1 className="sm:text-3xl text-xl font-semibold mt-5 ml-2 sm:mt-10">{props.title}</h1>
          <div class="mt-2 mb-5 h-0.5 bg-gray-950 w-10/12"></div>
          <div id={`profiles-${props.title}`} className='flex flex-wrap justify-center sm:justify-normal' >
              {data.map((profile, index)=>(
                  <div key={index} className="card relative w-64 sm:w-80 h-96 lg:h-52 bg-slate-50 rounded-md border hover:bg-slate-300/80 m-1 sm:m-5">
                    <div className="card-body w-64 sm:w-80 h-52  absolute flex flex-col lg:flex-row justify-between lg:justify-around items-center text-wrap sm:p-3">
                        <div className="bg-slate-900/10 w-64 h-64 lg:w-32 lg:h-32 rounded-lg">
                            <img src={profile.imagePath} alt={`img-${profile.name}`} className='w-64 h-64 lg:w-32 lg:h-32 rounded-lg'/>
                        </div>
                        <div className="details text-center  text-amber-950 mt-2">
                              <p className=' flex flex-col'>
                                  <span className="font-bold text-xl ">{profile.name}</span>
                                  {profile.affiliation != "" && <span className='text-base'>{ profile.affiliation }</span>}
                                </p>
                        </div>
                    </div>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Profiles