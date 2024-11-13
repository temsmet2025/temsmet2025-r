import React from 'react'

const Profiles = (props) => {
  const  data = props.profiles;
  return (
    <div className="w-full  sm:m-10">
          <h1 className="sm:text-3xl text-xl font-semibold mt-5 ml-2 sm:mt-10">{props.title}</h1>
          <div id={`profiles-${props.title}`} className='flex flex-wrap justify-center sm:justify-normal' >
              {data.map((profile, index)=>(
                  <div key={index} className="card relative w-64 sm:w-80 h-52 bg-slate-50 rounded-md shadow-lg hover:bg-slate-300/80 m-1 sm:m-5">
                    <div className="card-body w-64 sm:w-80 h-52  absolute flex flex-col justify-center items-center text-wrap sm:p-3">
                        <div className="bg-slate-900/10 w-20 h-20 rounded-full">
                            <img src={profile.imagePath} alt={`img-${profile.name}`} className='w-20 h-20 rounded-full'/>
                        </div>
                        <div className="details text-center  text-amber-950 mt-2">
                              <p className='font-bold flex flex-col'>
                                  <span className="font-medium text-lg ">{profile.name}</span>
                                  {profile.affiliation != "" && <span>{ profile.affiliation }</span>}
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