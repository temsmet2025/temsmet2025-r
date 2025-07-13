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
    <div id="keynote-speakers" className="p-5 mt-10 sm:p-5 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20">
      
      <Profiles title="Keynote Speakers" profiles={speakers} />
      <p className="mt-8 text-center text-lg text-black">
        More to come...
      </p>
    </div>
  );
}

export default KeynoteSpeakers;
