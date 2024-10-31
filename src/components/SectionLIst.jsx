function SectionList(props) {
    const dataItem = props.dataItem;
    const title = props.title;
    return (
        <div id={`section-list-${title}`} className="ml-32 mr-32 mt-10 mb-10 ">
            <h1 className='font-bold text-4xl text-gray-800'>{ title }</h1>
            <ul className="text-justify">
                {dataItem.map((item, index) => (
                    <li key={index} className="m-2 list-disc">
                        <span className="font-bold text-lg">{ item.track } :</span> {item.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SectionList