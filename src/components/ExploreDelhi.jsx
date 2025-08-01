
import { delhiPlaces } from "../assets/dataItems";
import { delhiFoodPlaces } from "../assets/dataItems";
import { HeadingBar } from './SmallComps'

const ExploreDelhi = () => {
  return (
    <div className="">
      <h1 className="font-bold sm:text-3xl text-2xl text-sky-700">
        Tourist Places in Delhi
      </h1>
      <HeadingBar />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {delhiPlaces.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {place.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="font-bold sm:text-3xl text-2xl text-sky-700 mt-10">
        Famous Food Places in Delhi
      </h1>
      <HeadingBar />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {delhiFoodPlaces.map((place, index) => (
          <div
            key={index}
            onClick={() => window.open(place.website, "_blank")}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {place.name}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{place.description}</p>
              <a
                href={place.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm underline block"
                onClick={(e) => e.stopPropagation()} // Prevents triggering the card's click event
              >
                View Location on Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreDelhi;
