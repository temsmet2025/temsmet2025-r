import React from 'react'

const Profiles = (props) => {
  const  data = props.profiles;
  return (
    <div className="w-full m-10">
          <h1 className="text-3xl font-bold mt-10">{props.title}</h1>
          <div id={`profiles-${props.title}`} className='flex flex-wrap' >
              {data.map((profile, index)=>(
                  <div key={index} className="card relative w-80 h-52 bg-slate-300/60 rounded-md shadow-slate-950 m-5 hover:bg-slate-300/80">
                    <div className="card-body w-80 h-52  absolute flex flex-col justify-center items-center  text-wrap p-3">
                        <div className="image  bg-slate-900/10 w-20 h-20 rounded-full">
                            <img src={profile.imagePath} alt={`img-${profile.name}`} className='w-20 h-20 rounded-full'/>
                        </div>
                        <div className="details text-center  text-amber-950 mt-2">
                              <p className='font-bold flex flex-col'>
                                  <span class="font-medium text-lg ">{profile.name}</span>
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