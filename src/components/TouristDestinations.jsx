import { destinations } from "../assets/dataItems";
import { HeadingBar } from './SmallComps'

function TouristDestinations() {
  return (
    <div
      id="tourist-destinations"
      className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8"
    >
      <h1 className="font-bold sm:text-4xl text-2xl text-sky-700">Tourist Destinations</h1>
      <HeadingBar />
      <p className="text-black text-sm sm:text-base mt-6 mb-6 text-justify">
        Delhi, the capital city of India, is a fascinating mix of rich history, diverse culture, and modern living.
        With its unique blend of ancient monuments, bustling markets, colonial architecture, and a vibrant food scene,
        Delhi stands as a testament to India's diverse heritage. Whether you're a history buff, a culture enthusiast,
        or a food lover, Delhi has something for everyone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{destination.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{destination.description}</p>
              <p className="text-gray-700 font-medium">{destination.distance}</p>
              <p className="text-gray-700">{destination.travelOptions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TouristDestinations;
