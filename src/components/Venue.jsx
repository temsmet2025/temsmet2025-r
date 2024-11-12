import {venueImages} from "./../assets/venueImages"
import { useState, useEffect } from "react";

function Venue(){
    const [imageId, setImageId] = useState(5);
    const imageRefreshRate = 5000;
    useEffect(()=>{
        const timerId = setTimeout(() => {
            setImageId((imageId+1)%venueImages.length);
        }, imageRefreshRate);
        return () => clearTimeout(timerId);
    }, [imageId, venueImages]);
    return (
    <section id="venue-and-dates" className="bg-gray-100 flex flex-row justify-between text-gray-950  pb-32 pt-5 ">
        {/* map */}
        <div className="w-full max-w-6xl ml-40">
            <h2 className="text-3xl font-bold mb-2">Venue</h2>
            <p className="text-xl mb-2 text-indigo-700 font-bold">
                National Institute of Technology Delhi
            </p>
            <p className="mb-3 text-xl"><strong>City:</strong> New Delhi, India</p>
            <iframe className="map-location h-96 w-1/2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17424.126437601928!2d77.1329659!3d28.8165378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e1!3m2!1sen!2sin!4v1725867350072!5m2!1sen!2sin"
                style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* images of venue */}
        <div className="h-full w-full " style={{height:"25rem", width:"100rem"}}>
            <h2 className="text-gray-950 text-4xl font-bold">Gallery</h2>
            <div className="relative mt-16 h-full w-full" style={{height:"25rem", width:"100rem"}}>
                {venueImages.map((images, index) => (
                    <div key={index} id="venue-images" className= {`w-2/3 h-full absolute top-0 transition-all duration-1000 ease-in-out ${(images.id === imageId) ? "z-10 opacity-100":"z-0 opacity-0"}`}>
                        <img className="absolute top-0" src={images.name} alt={`gallery-${images.name}`} style={{height:"25rem", width:"100rem"}}/>
                    </div>
                ))}
                {/* <div className="absolute z-20 border-solid border-slate-400">
                    <a className="">View Gallery</a>
                </div> */}
            </div>
        </div>
    </section>
    )
}
export default Venue;