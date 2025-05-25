import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeadingBar } from './SmallComps'

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
        <div id={`section-list-${title}`} className={`${props.classes}`}>
            <div className="">
                <div className="flex flex-wrap">
                    <h1 className='font-bold text-sky-700 sm:text-3xl text-2xl'>{title.split("4th").map((part, index) => (
                        <React.Fragment key={index}>
                            {part}
                            {index < title.split("4th").length - 1 && <>4<sup>th</sup></>}
                        </React.Fragment>
                    ))}</h1>
                    <span className='hover:text-blue-700 cursor-pointer'>{props.isButton === "SquareArrowOutUpRight" && <Link to="/keynote-speakers">  <SquareArrowOutUpRight /></Link>}</span>
                </div>
                <HeadingBar />
            </div>
            <ul className="text-justify mt-5 p-8 pt-0 sm:p-0 ">
                {dataItem.map((item, index) => (
                    <li key={index} className={`sm:ml-7 sm:mr-7 list-disc`}>
                        {item.track != undefined && <span className="font-bold text-base sm:text-xl">{item.track} : </span>}
                        <span className="text-sm sm:text-xl">{item.description.split("4th").map((part, part_index) => (
                            <React.Fragment key={part_index}>
                                {part}
                                {part_index < item.description.split("4th").length - 1 && <>4<sup>th</sup></>}
                            </React.Fragment>

                        ))}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SectionList;
