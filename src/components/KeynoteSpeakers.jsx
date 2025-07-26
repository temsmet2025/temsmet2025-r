import { useState, useEffect } from 'react'
import Profiles from './Profiles'

function KeynoteSpeakers() {
  const [speakers, setSpeakers] = useState();
  const [loading, setLoading] = useState(true);
  const API_URL = (import.meta.env.VITE_API_URL + "speakers/") || 'http://localhost:8000/api/speakers/';
  useEffect(() => {
      const fetchSpeakers = async () => {
          try {
              const response = await fetch(API_URL);
              const data = await response.json();
              setSpeakers(data);
              setLoading(false)
          } catch (error) {
              console.error("Failed to fetch committees:", error);
          } 
      };

      fetchSpeakers();
    }, []);
  return (
    <div id="keynote-speakers" className="">
       {loading ? (
                // 👇 Skeleton or spinner
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 animate-pulse">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-gray-200 rounded-lg p-4 h-48 shadow-inner">
                            <div className="bg-gray-300 h-24 w-24 rounded-full mx-auto mb-3" />
                            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
                        </div>
                    ))}
                </div>
            ):
        < Profiles title="Keynote Speakers" profiles={speakers} />
        }
      <p className="mt-8 text-center text-lg text-black">
        More to come...
      </p>
    </div>
  );
}

export default KeynoteSpeakers;
