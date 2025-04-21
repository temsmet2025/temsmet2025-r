import { keynoteSpeakers } from "../assets/keynoteSpeakers";
import Profiles from "./Profiles";

function KeynoteSpeakers() {
  return (
    <div id="keynote-speakers" className="p-5 mt-10 sm:p-5 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20">
      {/* <h1 className="font-bold text-2xl text-center sm:text-4xl ">
        Keynote Speakers
      </h1>
      <p>Our keynote speakers are...</p> */}
      <Profiles title="Keynote Speakers" profiles={keynoteSpeakers} />
      <p className="mt-8 text-center text-lg text-black">
        More to come...
      </p>
    </div>
  );
}

export default KeynoteSpeakers;
