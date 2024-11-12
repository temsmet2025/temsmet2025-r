import { venueImages } from "./../assets/venueImages";
import { useState, useEffect } from "react";

const MapSection = () => (
  <div className="w-full max-w-6xl flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-2">Venue</h2>
    <p className="text-xl mb-2 text-indigo-700 font-bold">
      National Institute of Technology Delhi
    </p>
    <p className="mb-3 text-xl">
      <strong>City:</strong> New Delhi, India
    </p>
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

const GallerySection = ({ imageId }) => (
    <div className="h-full w-full flex flex-col items-center">
        <h2 className="text-gray-950 text-4xl font-bold">Gallery</h2>
        <div className="relative mt-16 h-full w-full  flex flex-col items-center">
            {venueImages.map((images, index) => (
                <div
                    key={index}
                    id="venue-images"
                    className={`w-full lg:w-2/3 h-full transition-opacity duration-1000 ease-in-out ${
                        images.id === imageId ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ display: images.id === imageId ? "block" : "none" }}
                >
                    <img
                        className="w-full h-96 object-cover"
                        src={images.name}
                        alt={`gallery-${images.name}`}
                    />
                </div>
            ))}
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
      className="bg-gray-100 flex flex-col lg:flex-row justify-center lg:text-gray-950 p-5 pb-32 mt-12"
    >
      <MapSection />
      <GallerySection imageId={imageId} />
    </section>
  );
}

export default Venue;
