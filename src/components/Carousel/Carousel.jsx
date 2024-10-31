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
            <div className="absolute bottom-0 w-full flex justify-center items-center z-10">
                {images.map((image, index)=>(
                    <div key={ index+100 } className="">
                        <button  onClick={() => handleImages(image.id)} className='p-2'>
                        <Circle color={`${index == imageIndex? 'black':"white"}`} strokeWidth={3}/>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Carousel;