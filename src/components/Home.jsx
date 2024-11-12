import React from 'react'
import SectionList from './SectionLIst'
import { conferenceStructure, deligates, potentialSpeakers, sponsorsAndExhibitors } from "./../assets/dataItems"

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
      <div className="conference-theme sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8">
        <h1 className='sm:font-bold sm:text-4xl text-gray-800 text-2xl font-semibold'>Conference Theme</h1>
        <span className="font-bold ">“Innovation and Technology Management in the era of Gen AI”</span>
        <p className='text-justify text-sm sm:text-base'>The conference focuses on the intersection of technology, management, innovation, and sustainable development within the context of the rapidly advancing era of Generative Artificial Intelligence (Gen AI). It explores how Gen AI, a subset of AI that can generate new content, designs, solutions, and ideas, is reshaping industries, influencing management strategies, and driving sustainable practices across the globe. The conference offers an international platform for scientists, researchers, engineers, and students to share the latest innovations and advancements in Technology, Engineering, Management, and Science. It features plenary sessions and invited talks by eminent experts, showcasing cutting-edge research. Original research contributions are invited.</p>
      </div>
      <SectionList title="Conference Structure" dataItem={conferenceStructure} />
      <SectionList title="Potential Speakers" dataItem={potentialSpeakers} />

      <ImportantDatesTable title="Important Dates" dataItem={importantDates} />
      <deligates dataItem={deligates}/>

      <SectionList title="Sponsors And Exhibitors" dataItem={sponsorsAndExhibitors} />
    </section>
  )
}

export default Home;
