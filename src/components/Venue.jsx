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
      className="flex flex-col justify-center items-center h-full w-full"
    >
      <h2 className="font-bold sm:text-4xl text-2xl mb-4 text-sky-700 ">Venue</h2>
      <p className="text-2xl lg:text-3xlmb-2 mb-4 text-indigo-700 font-bold">
        National Institute of Technology Delhi
      </p>
      <p className="sm:text-3xl text-2xl text-gray-800">
        <strong>City:</strong> New Delhi, India
      </p>
      <div className="flex flex-col lg:flex-row justify-center lg:text-gray-950 mt-3 h-full w-full gap-2">
        <div className="lg:w-1/2 w-full flex justify-center">
          <MapSection />
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <GallerySection imageId={imageId} />
        </div>
      </div>

      <h2 className="font-bold mt-10 sm:text-4xl text-2xl text-gray-800">Directions</h2>
      
      <div className=" p-8">
        <h2 className="font-bold sm:text-3xl text-2xl text-gray-800 mb-4">Reaching NIT Delhi from IGI Airport (Terminals 1, 2, and 3):</h2>

        <h3 className="font-bold sm:text-2xl text-xl text-gray-800 ">By Car:</h3>
        <p className="text-gray-700 sm:text-lg text-base mb-2">
          From Terminal 1, 2, or 3, NIT Delhi is approximately 45-55 km away and takes around 1 to 1.5 hours by car, depending on traffic. Use the Delhi-Gurgaon Expressway (NH48) to reach the Outer Ring Road and then continue on NH44 (GT Karnal Road) toward Alipur, where NIT Delhi is located. You can also book app-based taxis like Ola or Uber for convenience.
        </p>

        <h3 className="font-bold sm:text-2xl text-xl text-gray-800">By Metro:</h3>
        <ul className="list-disc pl-6 text-gray-700 sm:text-lg text-base mb-6">
        <li>
          <strong>From Terminal 3:</strong> Take the Airport Express Line to New Delhi Metro Station. Switch to the Yellow Line towards Samaypur Badli. From Samaypur Badli Metro Station, NIT Delhi is about 10 km away, which can be covered by an auto or cab.
        </li>
        <li>
          <strong>From Terminal 1 or 2:</strong> Use a shuttle service or bus to reach Dhaula Kuan Metro Station. Board the Airport Express Line to New Delhi Metro Station and follow the same route as above.
        </li>
        </ul>

        <h2 className="font-bold sm:text-3xl text-2xl text-gray-800 mb-4">Reaching NIT Delhi from Major Railway Stations:</h2>

        <h3 className="font-bold sm:text-2xl text-xl text-gray-800">1. From New Delhi Railway Station (NDLS):</h3>
        <ul className="list-disc pl-6 text-gray-700 sm:text-lg text-base mb-2">
        <li>
          <strong>By Car:</strong> NIT Delhi is approximately 30-35 km from New Delhi Railway Station, and the journey takes around 1 to 1.5 hours via NH44.
        </li>
        <li>
          <strong>By Metro:</strong> Take the Yellow Line from New Delhi Metro Station towards Samaypur Badli. From Samaypur Badli, take a cab or auto to NIT Delhi, which is around 10 km away.
        </li>
        </ul>

        <h3 className="font-bold sm:text-2xl text-xl text-gray-800">2. From Old Delhi Railway Station (DLI):</h3>
        <ul className="list-disc pl-6 text-gray-700 sm:text-lg text-base mb-2">
        <li>
          <strong>By Car:</strong> NIT Delhi is approximately 25-30 km from Old Delhi Railway Station and can be reached in about 1 to 1.5 hours via NH44.
        </li>
        <li>
          <strong>By Metro:</strong> From Chandni Chowk Metro Station (near Old Delhi Railway Station), take the Yellow Line directly to Samaypur Badli. From there, take a cab or auto to the campus.
        </li>
        </ul>

        <h3 className="font-bold sm:text-2xl text-xl text-gray-800">3. From Hazrat Nizamuddin Railway Station (NZM):</h3>
        <ul className="list-disc pl-6 text-gray-700 sm:text-lg text-base mb-2">
        <li>
          <strong>By Car:</strong> The distance from Nizamuddin to NIT Delhi is around 35-40 km, taking approximately 1.5 hours via NH44.
        </li>
        <li>
          <strong>By Metro:</strong> Take the Pink Line from Hazrat Nizamuddin Metro Station to INA Metro Station. Switch to the Yellow Line and continue to Samaypur Badli. Complete the final 10 km by auto or cab.
        </li>
        </ul>

        <h3 className="font-bold sm:text-2xl text-xl text-gray-800">4. From Anand Vihar Railway Station (ANVT):</h3>
        <ul className="list-disc pl-6 text-gray-700 sm:text-lg text-base">
        <li>
          <strong>By Car:</strong> NIT Delhi is about 40-45 km away and can be reached in 1.5 to 2 hours via NH44.
        </li>
        <li>
          <strong>By Metro:</strong> From Anand Vihar Metro Station, take the Blue Line to Rajiv Chowk. Switch to the Yellow Line and travel to Samaypur Badli, then proceed by road to the campus.
        </li>
        </ul>
      </div>


    </section>
  );
}

export default Venue;
