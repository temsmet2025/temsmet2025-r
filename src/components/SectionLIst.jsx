function SectionList(props) {
    const dataItem = props.dataItem;
    const title = props.title;
    return (
        <div id={`section-list-${title}`} className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8 ">
            <h1 className='font-bold sm:text-4xl text-2xl text-gray-800'>{ title }</h1>
            <ul className="text-justify">
                {dataItem.map((item, index) => (
                    <li key={index} className="ml-7 mr-7 list-disc">
                        <span className="font-bold text-base sm:text-lg">{item.track} : </span>
                        <span className="text-sm sm:text-base">{item.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SectionList