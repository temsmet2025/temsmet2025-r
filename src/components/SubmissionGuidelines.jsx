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
    <div className="">
      <h1 className="font-bold sm:text-3xl text-2xl text-sky-700">Submission Guidelines</h1>
      <HeadingBar />
      <p className="text-black text-base sm:text-xl text-wrap mt-4 text-justify">
        Prospective authors are invited to submit original technical papers for
        publication in the TEMSMET 2025. All presented papers will be submitted
        to the IEEE for possible inclusion in IEEE Xplore. All papers should
        adhere to the following guidelines:
      </p>
      <ul className="list-disc p-7 text-black text-sm sm:text-xl leading-relaxed text-wrap text-justify">
        {submissionGuidelines.map((guideline, index) => (
          <li key={index} className="mb-3" dangerouslySetInnerHTML={{ __html: guideline }} />
        ))}
      </ul>

      <div id="templates-format" className="">
        <h1 className="text-xl sm:text-2xl font-bold text-sky-700">For Reference Download these Formats: </h1>
        <HeadingBar />
        <div className="mt-10 flex flex-col gap-10 justify-center items-center text-sky-600 font-bold">
          <a href=".downloadable/conference-template-letter.docx" download={"temsmet-word-template"}>
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">Word Template</span>
          </a>
          <a href="/downloadable/conference-template-letter.pdf" target="_blank">
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">
              PDF Template
            </span>
          </a>
          <a href="./downloadable/LaTeX-Template.zip" download={"temsmet-latex-template"}>
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">LaTex Template</span>
          </a>
          <a href="/downloadable/IEEE_TEMSEMT_PPT.pdf" target="_blank">
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">
              Paper Presentation PDF Template
            </span>
          </a>
          <a href="./downloadable/IEEE_TEMSEMT_PPT.pptx" download={"paper-presentation-pptx-format"}>
            <span className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 ">
              Poster Presentation PPT Template
            </span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default SubmissionGuidelines;
