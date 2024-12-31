import React from "react";
import { submissionGuidelines } from "./../assets/dataItems";

/**
 * SubmissionGuidelines component displays a list of submission rules
 * for prospective authors as per TEMSMET 2025 guidelines.
 *
 * @returns {JSX.Element} A styled section for submission guidelines.
 */
const SubmissionGuidelines = () => {
  return (
    <div id="submission-guidelines" className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8">
      <h1 className="font-bold sm:text-4xl text-2xl text-gray-800">Submission Guidelines</h1>
      <div className="sm:visible mt-2 h-0.5 bg-gray-950 w-5/6"></div>
      <p className="text-black text-sm sm:text-base mt-4 text-justify w-5/6">
        Prospective authors are invited to submit original technical papers for
        publication in the TEMSMET 2025. All presented papers will be submitted
        to the IEEE for possible inclusion in IEEE Xplore. All papers should
        adhere to the following guidelines:
      </p>
      <ul className="list-disc ml-7 mr-7 text-black text-sm sm:text-base leading-relaxed mt-4 w-5/6">
        {submissionGuidelines.map((guideline, index) => (
          <li key={index} className="mb-3" dangerouslySetInnerHTML={{ __html: guideline }} />
        ))}
      </ul>
    </div>
  );
};

export default SubmissionGuidelines;
