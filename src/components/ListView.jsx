function ListView(props) {
    const dataItem = props.data;
    return (
        <div id={`props.title`} className="ml-32 mr-32 mt-10 mb-10">
            <h1 className="font-bold text-4xl ">{props.title}</h1>
            {dataItem.map((item, index) => (
                <span key={index} id={`tracks-${index}`}>
                    <h1 className="font-bold mt-7  text-lg">{item.track}</h1>
                    <ul className="list-disc ml-10">
                    {item.topics.map((topic, index) => (
                        <li key={index} className="mt-1">
                            {topic}
                        </li>
                    ))}
                    </ul>
                </span>
            ))}
            {/* {console.log(dataItem)} */}
            
        </div>
    )
}
export default ListView