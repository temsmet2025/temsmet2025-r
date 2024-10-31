import React from 'react'

const Profiles = (props) => {
  const  data = props.profiles;
  return (
    <div className="w-full m-10">
          <h1 className="text-3xl font-bold ">{props.title}</h1>
          <div id={`profiles-${props.title}`} className='flex flex-wrap'>
              {data.map((profile, index)=>(
                  <div key={index} className="relative card w-52 h-40 p-20 m-10 bg-slate-900/40 rounded-md shadow-slate-950">
                    <div className="image absolute tranform -translate-x-1/2 top-2 flex justify-center bg-slate-900/10 w-20 h-20 rounded-full">
                        <img src={profile.imagePath} alt={`img-${profile.name}`} className='w-20 h-20 rounded-full'/>
                    </div>
                    <div className="details absolute bottom-2 left-2 p-2 mt-3 text-amber-200">
                          <p>
                              <span class="font-medium text-lg">{profile.name}</span>
                              {profile.affiliation != "" && <span>{ profile.affiliation }</span>}
                            </p>
                    </div>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Profiles