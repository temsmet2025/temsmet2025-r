import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SectionList component used to display a list of items related to a specific section, 
 * such as Conference Structure, Potential Speakers, and Sponsors and Exhibitors.
 * It receives a title and a data item array, rendering the list dynamically.
 * 
 * @param {Object} props - The props for the SectionList component.
 * @param {string} props.title - The title of the section to display.
 * @param {Array} props.dataItem - The data items to display in the list, typically containing track names and descriptions.
 * @returns {JSX.Element} The JSX for displaying the section list.
 */
function SectionList(props) {
    const dataItem = props.dataItem;
    const title = props.title;

    return (
        <div id={`section-list-${title}`} className={`sm:ml-32 sm:mt-10 mb-10`}>
            <div className="ml-8 sm:m-0">
                <div className="flex flex-wrap">
                    <h1 className='font-bold sm:text-4xl text-2xl text-gray-800'>{title}</h1>
                    <span className='hover:text-blue-700 cursor-pointer'>{props.isButton === "SquareArrowOutUpRight" && <Link to="/keynote-speakers">  <SquareArrowOutUpRight /></Link>}</span>
                </div>
                <div className="sm:visible mt-2 h-0.5 bg-gray-950 w-5/6"></div>
            </div>
            <ul className="text-justify mt-5 p-8 pt-0 sm:p-0 w-5/6">
                {dataItem.map((item, index) => (
                    <li key={index} className={`ml-7 mr-7 list-disc ${props.classes}`}>
                        {item.track != undefined && <span className="font-bold text-base sm:text-xl">{item.track} : </span>}
                        <span className="text-sm sm:text-xl">{item.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SectionList;
