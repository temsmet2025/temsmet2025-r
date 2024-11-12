// used for call-for-papers
function ListView(props) {
  const dataItem = props.data;
  return (
    <div
      id={`props.title`}
      className="flex flex-col justify-center items-center mt-8 mb-8"
    >
      <div>
        <h1 className="font-bold text-4xl text-center">{props.title}</h1>
        {dataItem.map((item, index) => (
          <div key={index} id={`tracks-${index}`} className="p-8">
            <h1 className="font-bold mt-7 text-lg">{item.track}</h1>
            <ul className="list-disc ml-10">
              {item.topics.map((topic, index) => (
                <li key={index} className="mt-1">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* {console.log(dataItem)} */}
      </div>
    </div>
  );
}
export default ListView;
