import { images } from './CarouselItems'
import { useState, useEffect } from 'react'
import { Circle } from 'lucide-react'
function Carousel() {
    const [imageIndex, setImageIndex] = useState(1);
    const handleImages = (imageIdx)=>{
        setImageIndex((imageIdx));
    }
    const autoSlideDuration =4000;
    useEffect(() => {
        const timerId = setTimeout(() => { setImageIndex((imageIndex + 1) % images.length)}, autoSlideDuration);
        return () => clearTimeout(timerId);
    }, [imageIndex, images])

    return (
        <section className="relative w-full carousel-container " style={{height:"35rem"}}>
            <div className="image-container  m-auto w-full " style={{height:"35rem"}}>
                {images.map((image, index) => (
                    <img key={index} src={image.name}
                        alt={`carousel image ${image.id}`}
                        className={`absolute inset-0  w-full transition-all duration-1000 ease-in-out ${imageIndex == image.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        style={{height:"35rem"}}
                    />
                ))}
            </div>
            <div id="circle-buttons" className="absolute bottom-0 w-full flex justify-center items-center z-10">
                {images.map((image, index)=>(
                    <div key={ index+100 } className="">
                        <button  onClick={() => handleImages(image.id)} className='p-2'>
                        <Circle color={`${index == imageIndex? 'black':"white"}`} strokeWidth={3}/>
                        </button>
                    </div>
                ))}
            </div>
            <div id="overlay" className="absolute bottom-0 top-0 w-full bg-black z-20 bg-opacity-30" style={{ height: "35rem" }}>
            </div>
            <div id="carousel-text" className='absolute top-0 w-full' style={{ height: "35rem" }}>
                <div id="text-body" className='flex flex-col justify-center items-center w-full p-10 z-30' style={{ height: "35rem" }}> 
                    <div id="welcome-note" className="z-30">
                        <h1 className='text-2xl font-extrabold bg-gradient-to-r from-sky-600 to-slate-950 sm:text-4xl bg-clip-text text-transparent'>Welcome To TEMSMET2025</h1>
                    </div>
                    <div id="full-name" className='z-30 mt-10'>
                        <p className='flex flex-col text-center text-extrabold text-base sm:text-2xl text-red-200'>
                            <span>
                                IEEE 4th International Conference
                            </span>
                            <span>
                                on
                            </span>
                            <span>
                                Technology, Engineering, Management for Societal Impact 
                            </span>
                            <span>
                                using
                            </span>
                            <span>
                                Marketing, Entrepreneurship, and Talent (TEMSMET)
                            </span>
                        </p>
                    </div>
                    <div id="date-venue-text" className='z-30 mt-10'>
                        <p className='flex flex-col text-center text-bold text-base sm:text-2xl text-red-200'>
                            <span>
                                05-07 November 2025
                            </span>
                            <span>
                                National Institute of Technology Delhi, New Delhi, India
                            </span>
                        </p>
                    </div>
                    

                </div>
            </div>
        </section>
    )
}

export default Carousel;