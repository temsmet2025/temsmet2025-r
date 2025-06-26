import React from 'react'
import SectionList from './SectionLIst'
import { conferenceStructure, deligates, potentialSpeakers, sponsorsAndExhibitors, importantDates, registrationFees, submissionGuidelines, aboutConference, aboutHost } from "./../assets/dataItems"
import TableView from './TableView'
import { HeadingBar } from './SmallComps'

/**
 * Home component displaying the conference theme and related sections.
 * It includes a description of the conference theme and calls the SectionList component 
 * for displaying other sections like Conference Structure, Potential Speakers, and Sponsors and Exhibitors.
 * 
 * @returns {JSX.Element} The Home section containing the theme and section lists.
 */
const getUpdatedImportantDates = (today, targetDate, strikeLineNumber) => {
  const newDates = [...importantDates]
  if (today >= targetDate) {
    newDates[strikeLineNumber] = {
      tableData: [
        'Paper Submission Closes',
        <>
          <s className='text-black text-sm'>July 05, 2025</s>, July 25, 2025
        </>
      ]
    }
  }
  return newDates;
}

const toDateOnly = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
const getUpdatedColors = (today, updatedImportantDates) => {
  // const eventTimeLine = [
  //   toDateOnly(new Date('2025-07-25')), // Paper Submission Closes
  //   toDateOnly(new Date('2025-08-08')), // Notification
  //   toDateOnly(new Date('2025-08-21')), // Camera-ready
  //   toDateOnly(new Date('2025-08-23')), // Early Registration
  //   toDateOnly(new Date('2025-09-02')), // Regular Registration
  //   toDateOnly(new Date('2999-10-08')), // Conference
  // ]
  const eventTimeLine = [
    toDateOnly(new Date('2025-06-26')), // Paper Submission Closes
    toDateOnly(new Date('2025-06-27')), // Notification
    toDateOnly(new Date('2025-08-21')), // Camera-ready
    toDateOnly(new Date('2025-08-23')), // Early Registration
    toDateOnly(new Date('2025-09-02')), // Regular Registration
    toDateOnly(new Date('2025-10-08')), // Conference
    toDateOnly(new Date('2999-10-08')), // Conference
  ]
  
  const updatedColorTable = updatedImportantDates.map((event, index) => {
    
    const prevDate = index == 0 ? new Date('1999-08-04') : eventTimeLine[index-1];
    const nextDate = eventTimeLine[index];
    console.log("prevDate =", prevDate)
    console.log("nextDate =", nextDate)
    const isActive = (today > prevDate && today <= nextDate);

    // style date text red if it's the active one
    return {
      tableData: [
        isActive
          ? <span className="text-red-600 font-bold">{event.tableData[0]}</span>
          : event.tableData[0], // label
        isActive
          ? <span className="text-red-600 font-bold">{event.tableData[1]}</span>
          : event.tableData[1]
      ]
    };
  });

  return updatedColorTable;
}

const Home = () => {
  const today = toDateOnly(new Date());
  const targetDate = toDateOnly(new Date('2025-06-27'))
  const strikeLineNumber = 0
  const updatedImportantDates = getUpdatedImportantDates(today, targetDate, strikeLineNumber);
  const updatColorForDates = getUpdatedColors(today, updatedImportantDates)

  return (
    <section id="home" className="home p-5 sm:mt-10 sm:p-5 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20">
      <div className="conference-theme">
        <div className="">
          <h1 className='font-bold sm:text-3xl text-2xl text-sky-700'>Conference Theme</h1>
          <HeadingBar />
        </div>
        <div className="">
          <span className="font-bold text-base sm:text-xl text-wrap">“Innovation and Technology Management in the Era of Gen AI”</span>
          <p className='text-justify text-base sm:text-xl text-wrap'>The conference focuses on the intersection of technology, management, innovation, and sustainable development within the context of the rapidly advancing Era of Generative Artificial Intelligence (Gen AI). It explores how Gen AI, a subset of AI that can generate new content, designs, solutions, and ideas, is reshaping industries, influencing management strategies, and driving sustainable practices across the globe. The conference offers an international platform for scientists, researchers, engineers, and students to share the latest innovations and advancements in Technology, Engineering, Management, and Science. It features plenary sessions and invited talks by eminent experts, showcasing cutting-edge research. Original research contributions are invited.</p>
        </div>
      </div>

      <SectionList title="About 4th IEEE TEMSMET 2025" dataItem={aboutConference} classes="mt-2 sm:mt-5 md:mt-10" />
      <SectionList title="About the Host of 4th IEEE TEMSMET 2025" dataItem={aboutHost} classes="mt-2 sm:mt-5 md:mt-10" />
      <SectionList title="Conference Structure" dataItem={conferenceStructure} classes="mt-2 sm:mt-5 md:mt-10" />
      <SectionList title="Potential Speakers" dataItem={potentialSpeakers} isButton={"SquareArrowOutUpRight"} classes="mt-2 sm:mt-5 md:mt-10" />

      <TableView tableName="Important Dates" highLightRow={0} tableHead={['EVENTS', 'DATE']} dataItem={updatColorForDates} classes="mt-2 sm:mt-5 md:mt-10" />
      <div className="">
        <p className='font-extrabold text-lg sm:text-xl md:text-2xl text-blue-800'>"All presented papers will be submitted to IEEE for possible publication in IEEE Xplore."</p>
      </div>

      <SectionList title="Sponsors And Exhibitors" dataItem={sponsorsAndExhibitors} classes=" mt-5 sm:mt-5 md:mt-10" />
    </section>
  )
}

export default Home;
