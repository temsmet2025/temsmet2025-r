import { keynoteSpeakers } from "../assets/keynoteSpeakers";
import Profiles from "./Profiles";

function KeynoteSpeakers() {
  return (
    <div id="keynote-speakers" className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8">
      {/* <h1 className="font-bold text-2xl text-center sm:text-4xl ">
        Keynote Speakers
      </h1>
      <p>Our keynote speakers are...</p> */}
      <Profiles title="Keynote Speakers" profiles={keynoteSpeakers} />
    </div>
  );
}

export default KeynoteSpeakers;
