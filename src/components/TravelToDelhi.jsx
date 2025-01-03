// function TravelToDelhi(){
//     return (
//         <div>
//             <p>Travel To Delhi</p>
//         </div>
//     );
// }

// export default TravelToDelhi;

import React from "react";
import { delhiPlaces } from "../assets/dataItems";

const TravelToDelhi = () => {
  return (
    <div className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8">
      <h1 className="font-bold sm:text-4xl text-2xl text-gray-800">
        Tourist Places in Delhi
      </h1>
      <div className="mt-2 mb-5 h-0.5 bg-gray-950 w-full"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default TravelToDelhi;
