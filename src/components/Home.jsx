import React from 'react'
import SectionList from './SectionLIst'
import { conferenceStructure, deligates, potentialSpeakers, sponsorsAndExhibitors, importantDates, registrationFees, submissionGuidelines, aboutConference, aboutHost } from "./../assets/dataItems"
import TableView from './TableView'

/**
 * Home component displaying the conference theme and related sections.
 * It includes a description of the conference theme and calls the SectionList component 
 * for displaying other sections like Conference Structure, Potential Speakers, and Sponsors and Exhibitors.
 * 
 * @returns {JSX.Element} The Home section containing the theme and section lists.
 */
const Home = () => {
  return (
    <section id="home" className="home ">
      <div className="conference-theme sm:ml-32 mt-10">
        <div className="ml-8 sm:m-0">
          <h1 className='font-bold sm:text-4xl text-2xl text-gray-800'>Conference Theme</h1>
          <div className="mt-2 mb-5 h-0.5 bg-gray-950 w-5/6"></div>
        </div>
        <div className="p-8 pt-0 sm:p-0">
          <span className="font-bold text-base sm:text-xl text-wrap">“Innovation and Technology Management in the Era of Gen AI”</span>
          <p className='text-justify text-sm sm:text-xl text-wrap sm:w-5/6'>The conference focuses on the intersection of technology, management, innovation, and sustainable development within the context of the rapidly advancing Era of Generative Artificial Intelligence (Gen AI). It explores how Gen AI, a subset of AI that can generate new content, designs, solutions, and ideas, is reshaping industries, influencing management strategies, and driving sustainable practices across the globe. The conference offers an international platform for scientists, researchers, engineers, and students to share the latest innovations and advancements in Technology, Engineering, Management, and Science. It features plenary sessions and invited talks by eminent experts, showcasing cutting-edge research. Original research contributions are invited.</p>
        </div>
      </div>

      <SectionList title="About 4th IEEE TEMSMET 2025" dataItem={aboutConference} classes="list-none mb-7 !ml-0 text-justify text-wrap sm:w-5/6" />
      <SectionList title="About the Host of 4th IEEE TEMSMET 2025" dataItem={aboutHost} classes="list-none mb-7 !ml-0 text-justify text-wrap sm:w-5/6" />
      <SectionList title="Conference Structure" dataItem={conferenceStructure} />
      <SectionList title="Potential Speakers" dataItem={potentialSpeakers} isButton={"SquareArrowOutUpRight"} />

      <TableView tableName="Important Dates" highLightRow={0} tableHead={['EVENTS', 'DATE']} dataItem={importantDates} classes="sm:w-5/6" />
      <div className="sm:ml-32 sm:w-5/6">
        <p className='font-extrabold text-lg sm:text-xl md:text-2xl text-blue-800'>"All accepted papers will be published in IEEE Xplore, subject to IEEE's discretion."</p>
      </div>

      <SectionList title="Sponsors And Exhibitors" dataItem={sponsorsAndExhibitors} />
    </section>
  )
}

export default Home;
