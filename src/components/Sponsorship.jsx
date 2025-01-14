import React, { useState } from 'react';
import {HeadingBar} from './SmallComps'

const Sponsorship = () => {
  return (
    <div id="sponsorship-invitation" className=" min-h-screen p-5 sm:mt-10 sm:p-5 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20">
      <h1 className="font-bold text-2xl sm:text-3xl text-sky-700">Sponsorship Details:</h1>
      <HeadingBar classes="w-full mb-5" />
      <div className="flex items-center justify-center">
        <iframe
        src="/Brochure.pdf#zoom=FitW&toolbar=0"
        className="w-full h-screen border border-gray-300 shadow-lg overflow-hidden"
        title="Sponsorship Invitation"
        loading='lazy'
      />
      </div>
      
    </div>
  );
};

export default Sponsorship;
