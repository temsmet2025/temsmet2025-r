import { Carousel } from "flowbite-react";
import { venueImages } from "./../assets/venueImages";
import { useState, useEffect } from "react";

const MapSection = () => (
  <div className="w-full h-96 flex justify-center">
    <iframe
      className="map-location h-96 w-full lg:w-3/4"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17424.126437601928!2d77.1329659!3d28.8165378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e1!3m2!1sen!2sin!4v1725867350072!5m2!1sen!2sin"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

const GallerySection = () => (
  <div className="h-96 w-full flex flex-col items-center lg:w-3/4">
    {/* <h2 className="text-gray-950 text-4xl font-bold mb-2">Gallery</h2>
    <p className="text-xl mb-2 text-indigo-700 font-bold">
      National Institute of Technology Delhi
    </p> */}
    <div className="h-full w-full flex flex-col items-center">
      <Carousel>
        {venueImages.map((images, index) => (
          <div key={index} id="venue-images relative">
            <img
              className="w-full h-96 object-cover"
              src={images.url}
              alt={`gallery-${images.name}`}
            />
            {/* <p className="text-center text-white text-3xl font-bold absolute bottom-10 w-full bg-opacity-50 bg-black py-2">
              {images.name}
            </p> */}
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

function Venue() {
  const [imageId, setImageId] = useState(5);
  const imageRefreshRate = 5000;

  useEffect(() => {
    const timerId = setTimeout(() => {
      setImageId((imageId + 1) % venueImages.length);
    }, imageRefreshRate);
    return () => clearTimeout(timerId);
  }, [imageId]);

  return (
    <section
      id="venue-and-dates"
      className="flex flex-col justify-center items-center h-full w-full mt-8"
    >
      <h2 className="text-3xl lg:text-5xl font-bold mb-2">Venue</h2>
      <p className="text-xl lg:text-3xlmb-2 text-indigo-700 font-bold">
        National Institute of Technology Delhi
      </p>
      <p className="mb-3 text-xl lg:text-3xl">
        <strong>City:</strong> New Delhi, India
      </p>
      <div className="flex flex-col lg:flex-row justify-center lg:text-gray-950 mt-3 h-full w-full p-8 gap-4">
        <div className="lg:w-1/2 w-full flex justify-center">
          <MapSection />
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <GallerySection imageId={imageId} />
        </div>
      </div>
    </section>
  );
}

export default Venue;
