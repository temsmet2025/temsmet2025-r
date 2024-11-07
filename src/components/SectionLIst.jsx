import React from 'react';

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
        <div id={`section-list-${title}`} className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8 ">
            <h1 className='font-bold sm:text-4xl text-2xl text-gray-800'>{title}</h1>
            <ul className="text-justify">
                {dataItem.map((item, index) => (
                    <li key={index} className="ml-7 mr-7 list-disc">
                        <span className="font-bold text-base sm:text-lg">{item.track} : </span>
                        <span className="text-sm sm:text-base">{item.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SectionList;
