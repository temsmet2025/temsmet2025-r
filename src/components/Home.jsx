import React from 'react'
import SectionList from './SectionLIst'
import { conferenceStructure, deligates, potentialSpeakers, sponsorsAndExhibitors, importantDates, registrationFees, submissionGuidelines, aboutConference, aboutHost } from "./../assets/dataItems"
import TableView from './TableView'
import { HeadingBar } from './SmallComps'
import { useEffect, useState } from 'react'
import { ArrowRight } from "lucide-react";
/**
 * Home component displaying the conference theme and related sections.
 * It includes a description of the conference theme and calls the SectionList component 
 * for displaying other sections like Conference Structure, Potential Speakers, and Sponsors and Exhibitors.
 * 
 * @returns {JSX.Element} The Home section containing the theme and section lists.
 */

function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

const EventSkeleton = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Conference Timeline</h2>
      <div className="space-y-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 rounded-2xl shadow-md border border-gray-200 bg-white"
          >
            <div className="flex-1">
              <div className="h-4 w-40 bg-gray-200 rounded-md animate-pulse mb-2"></div>
              <div className="h-3 w-28 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImportantDates = ({tableName, tableHead, dataItem}) => {
  return (
    <div id={`${tableName}`} className=''>
            {tableName?.length > 0 && <h1 className="font-bold sm:text-2xl md:text-3xl text-xl text-sky-700">{tableName}</h1>}
            {(tableName !== undefined && tableName !== "") && <HeadingBar />}
            <div className={` overflow-x-auto mt-6 shadow-lg`}>
                <table className="w-full border-collapse rounded-lg">
                    <thead>
                        <tr className="bg-gray-800 text-gray-100 text-left">
                            {tableHead.map((head, index) => (
                                <th key={index} className="px-6 py-4 font-bold">{head}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dataItem?.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 && 'bg-sky-300/25'} ${item.highlight == "red" && "font-bold"} 'bg-white' text-xs sm:text-sm lg:text-base xl:text-xl`}
                                style={{color:item.highlight}}
                            >
                                    <td 
                                        className={`px-6 py-4 border-b border-gray-300`}
                                    >
                                        {item.name}
                                    </td>
                                    <td key={index}
                                        className={`px-6 py-4 border-b border-gray-300`}
                                    >
                                      <div className='flex gap-2'>
                                          {item.prev_date && <span><s>{formatDate(item.prev_date)}</s>  </span>}
                                {item.prev_date && <span><ArrowRight className="inline w-4 h-4" /></span>}
                                          <span>{formatDate(item.updated_date)}</span>
                                          {
                                              item.is_firm_deadline && 
                                              <span className="">(Firm Deadline)</span>
                                          }
                                      </div>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

const Home = () => {
  const [importantDates, setImportantDates] = useState();
  const [loading, setLoading] = useState(true);
  const API_URL = (import.meta.env.VITE_API_URL + "/common/important-dates/") || 'http://localhost:8000/api/speakers/';

  useEffect(() => {
    const getImportantDates = async() => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setImportantDates(data);
        console.log(data)
        setLoading(false);
      }
      catch (error) {
          console.error("Failed to fetch committees:", error);
      }
    }
    getImportantDates()
  }, [])
  
  return (
    
    <section id="home" className="home">
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
      {loading ?<EventSkeleton/> : <ImportantDates
        tableName="Important Dates"
        tableHead={['EVENTS', 'DATE']}
        dataItem={importantDates}
        classes="mt-2 sm:mt-5 md:mt-10" />}

      <div className="">
        <p className='font-extrabold text-lg sm:text-xl md:text-2xl text-blue-800'>"All presented papers will be submitted to IEEE for possible publication in IEEE Xplore."</p>
      </div>

      <SectionList title="Sponsors And Exhibitors" dataItem={sponsorsAndExhibitors} classes=" mt-5 sm:mt-5 md:mt-10" />
    </section>
  )
}

export default Home;
