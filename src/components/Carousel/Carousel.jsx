import { images } from './CarouselItems'
import { useState, useEffect } from 'react'
import { Circle, MoveRight, MoveLeft } from 'lucide-react'

/**
 * Carousel component that displays a rotating set of images with navigation buttons.
 *
 * @component
 * @returns {JSX.Element} The Carousel component rendering images with navigation and text.
 */
function Carousel() {
  /**
   * State to track the index of the currently displayed image.
   * 
   * @type {number}
   */
  const [imageIndex, setImageIndex] = useState(0);

  /**
   * Function to handle the selection of an image when a circle button is clicked.
   *
   * @param {number} imageIdx - The index of the selected image.
   */
  const handleCircleBtn = (imageIdx) => {
    setImageIndex(imageIdx);
  }

  /**
   * Function to handle the left/right arrow button click to change the image.
   * 
   * The image index is incremented and wraps around using the modulo operator.
   */
  const handleArrowBtn = () => {
    setImageIndex((imgIdx) => (imgIdx + 1) % images.length);
  }

  // Duration for the automatic slide change (4 seconds)
  const autoSlideDuration = 4000;

  /**
   * useEffect hook to automatically slide to the next image after a set interval.
   * 
   * The timer is cleared when the component unmounts or the imageIndex changes.
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setImageIndex((imageIndex + 1) % images.length)
    }, autoSlideDuration);
    
    return () => clearTimeout(timerId);
  }, [imageIndex, images]);

  return (
    <section className="relative w-full carousel-container" style={{ height: "35rem" }}>
      <div className="image-container m-auto w-full" style={{ height: "35rem" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.name}
            alt={`carousel image ${image.id}`}
            className={`absolute inset-0 w-full transition-all duration-1000 ease-in-out ${imageIndex === image.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ height: "35rem" }}
          />
        ))}
      </div>

      {/* Left Arrow Button */}
      <div className="sm:hidden absolute z-30 top-1/2 transform -translate-y-1/2 p-1 bg-slate-200 rounded-full left-1" onClick={handleArrowBtn}>
        <MoveLeft size={10} strokeWidth={2} />
      </div>

      {/* Right Arrow Button */}
      <div className="sm:hidden absolute z-30 top-1/2 transform -translate-y-1/2 p-2 bg-slate-200 rounded-full right-1" onClick={handleArrowBtn}>
        <MoveRight size={10} strokeWidth={2} />
      </div>

      {/* Circle Navigation Buttons */}
      <div id="circle-buttons" className="hidden sm:visible absolute bottom-0 w-full sm:flex justify-center items-center z-30">
        {images.map((image, index) => (
          <div key={index + 100} className="">
            <button onClick={() => handleCircleBtn(image.id)} className="p-2">
              <Circle color={index === imageIndex ? 'black' : "white"} strokeWidth={3} />
            </button>
          </div>
        ))}
      </div>

      {/* Overlay for visual effect */}
      {/* <div id="overlay" className="absolute bottom-0 top-0 w-full bg-black z-20 bg-opacity-30" style={{ height: "35rem" }}></div> */}

      {/* Text Content Over Carousel */}
      <div id="carousel-text" className="absolute top-0 w-full" style={{ height: "35rem" }}>
        <div id="text-body" className="flex flex-col justify-center items-center w-full p-10 z-30" style={{ height: "35rem" }}>
          {/* Welcome Message */}
          
          
          {/* <div id="welcome-note" className="z-30 w-full"> */}
          {/* <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl w-full flex flex-wrap justify-center space-x-2 font-bold bg-gradient-to-r from-fuchsia-100 via-fuchsia-400 to-fuchsia-500 bg-clip-text text-transparent">
          <span>Welcome</span> <span>To</span> <span>TEMSMET 2025</span>
           </h1> */}
          {/* <h1 className="w-full flex flex-wrap justify-center space-x-2 font-bold bg-gradient-to-r from-fuchsia-100 via-fuchsia-400 to-fuchsia-500 bg-clip-text text-transparent"
          style={{
            fontSize: '2.25rem',    // 1.25rem ~ text-xl
            '@media (min-width: 640px)': { fontSize: '2.5rem' },   // sm: text-3xl
            '@media (min-width: 768px)': { fontSize: '3.75rem' },  // md: text-5xl
            '@media (min-width: 1024px)': { fontSize: '4.5rem' },  // lg: text-6xl
             '@media (min-width: 1280px)': { fontSize: '5.25rem' }  // xl: text-7xl
          }}>
          <span>Welcome</span> <span>To</span> <span>TEMSMET 2025</span>
          </h1>
        </div> */}

{/* Conference Name */}
{/* <div style={{ position: 'relative', zIndex: 30, marginTop: '20px', padding: '5px', maxWidth: '90%', }} className="sm:px-10 md:px-16 lg:px-20 xl:px-24">
  <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10, 10, 10, 0.6)', border: '1px solid black', zIndex: -1, }}>
  </div>
  <p style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', fontWeight: 'bold', color: '#FEE2E2', lineHeight: '1.6', }}
    className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
    <span>IEEE 4th International Conference</span>
    <span>on</span>
    <span>Technology, Engineering, Management for Societal Impact</span>
    <span>using</span>
    <span>Marketing, Entrepreneurship, and Talent (TEMSMET)</span>
  </p>
</div> */}

{/* Date and Venue */}
{/* <div style={{ position: 'relative', zIndex: 30, marginTop: '20px', padding: '20px', maxWidth: '90%'}} 
  className="sm:px-10 md:px-16 lg:px-20 xl:px-24">
  <div
    style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10, 10, 10, 0.6)', border: '1px solid black', zIndex: -1, }}
  ></div>
  <p style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', fontWeight: 'bold', color: '#FEE2E2', lineHeight: '1.6', }}
    className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
    <span>05 - 07 November 2025</span>
    <span>National Institute of Technology Delhi, New Delhi, India</span>
  </p>
</div> */}




<div id="welcome-note" className="z-30 w-full">
  <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl w-full flex flex-wrap justify-center space-x-2 font-bold bg-gradient-to-r from-fuchsia-100 via-fuchsia-400 to-fuchsia-500 bg-clip-text text-transparent">
    <span>Welcome</span> <span>To</span> <span>TEMSMET 2025</span>
  </h2>
  </div>

{/* Conference Name */}
<div style={{ position: 'relative', zIndex: 30, marginTop: '2px', padding: '10px 15px' }}>
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.6)',
      border: '1px solid black',
      zIndex: -1,
    }}
  ></div>
  <p
    style={{
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#FEE2E2',
      lineHeight: '1.4',
      padding: '5px',
    }}
    className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
    <span>IEEE 4th International Conference</span>
    <span>on</span>
    <span>Technology, Engineering, Management for Societal Impact</span>
    <span>using</span>
    <span>Marketing, Entrepreneurship, and Talent (TEMSMET)</span>
  </p>
</div>

{/* Date and Venue */}
<div style={{ position: 'relative', zIndex: 30, marginTop: '5px', padding: '10px 15px' }}>
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.6)',
      border: '1px solid black',
      zIndex: -1,
    }}
  ></div>
  <p
    style={{
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#FEE2E2',
      lineHeight: '1.4',
      padding: '5px',
    }}
    className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
    <span>05-07 November 2025</span>
    <span>National Institute of Technology Delhi, New Delhi, India</span>
  </p>
</div>



        </div>
      </div>
    </section>
  )
}

export default Carousel;
