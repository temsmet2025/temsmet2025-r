import React from 'react'
import SectionList from './SectionLIst'
import {conferenceStructure, potentialSpeakers, sponsorsAndExhibitors} from "./../assets/dataItems"

const Home = () => {

  return (
    <section id="home" className="home ">
      <div className="conference-theme ml-32 mr-32 mt-10 mb-10">
          <h1 className='font-bold text-4xl text-gray-800'>Conference Theme</h1>
          <span className="font-bold ">“Innovation and Technology Management in the era of Gen AI”</span>
          <p className='text-justify'>The conference focuses on the intersection of technology, management, innovation, and sustainable development within the context of the rapidly advancing era of Generative Artificial Intelligence (Gen AI). It explores how Gen AI, a subset of AI that can generate new content, designs, solutions, and ideas, is reshaping industries, influencing management strategies, and driving sustainable practices across the globe. The conference offers an international platform for scientists, researchers, engineers, and students to share the latest innovations and advancements in Technology, Engineering, Management, and Science. It features plenary sessions and invited talks by eminent experts, showcasing cutting-edge research. Original research contributions are invited.</p>
      </div>
        <SectionList title="Conference Structure" dataItem={ conferenceStructure } />
        <SectionList title="Potential Speakers" dataItem={ potentialSpeakers } />
        <SectionList title="Sponsors And Exhibitors" dataItem={ sponsorsAndExhibitors } />
      
    </section>
  )
}

export default Home