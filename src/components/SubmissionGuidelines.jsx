import React from "react";
import { submissionGuidelines } from "./../assets/dataItems";
import { HeadingBar } from "./SmallComps"

/**
 * SubmissionGuidelines component displays a list of submission rules
 * for prospective authors as per TEMSMET 2025 guidelines.
 *
 * @returns {JSX.Element} A styled section for submission guidelines.
 */
const SubmissionGuidelines = () => {
  return (
    <div id="submission-guidelines" className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8">
      <h1 className="font-bold sm:text-3xl text-2xl text-sky-700">Submission Guidelines</h1>
      <HeadingBar />
      <p className="text-black text-lg sm:text-xl mt-4 text-justify w-5/6">
        Prospective authors are invited to submit original technical papers for
        publication in the TEMSMET 2025. All presented papers will be submitted
        to the IEEE for possible inclusion in IEEE Xplore. All papers should
        adhere to the following guidelines:
      </p>
      <ul className="list-disc ml-7 mr-7 text-black text-lg sm:text-xl leading-relaxed mt-4 w-5/6">
        {submissionGuidelines.map((guideline, index) => (
          <li key={index} className="mb-3" dangerouslySetInnerHTML={{ __html: guideline }} />
        ))}
      </ul>

      <div id="templates-format" className="">
        <h1 className="text-xl sm:text-2xl font-bold text-sky-700">For Reference Download these Formats: </h1>
        <HeadingBar />
        <div className="mt-10 flex flex-col gap-10 justify-center items-center text-sky-600 font-bold">
          <a href="./downloadable/conference-template-letter_June-2023-1.docx" download>
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">Word Template</span>
          </a>
          <a href="./downloadable/conference-template-letter_June-2023-1.pdf" download>
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">PDF Template</span>
          </a>
          <a href="./downloadable/LaTeX-Template.zip" download>
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">LaTex Template</span>
          </a>
          <a href="./downloadable/Template-for-IEEE-ETFG-2023-Oral-Presentation-1.pptx" download>
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">Paper Presentation Template</span>
          </a>
          <a href="./downloadable/Poster-Template-for-IEEE-ETFG-2023-1.pptx" download>
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">Poster Presentation Template</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default SubmissionGuidelines;
