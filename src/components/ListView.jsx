// used for call-for-papers
function ListView(props) {
  const dataItem = props.data;
  return (
    <div
      id={`${props.title}`}
      className="mt-8 mb-8"
    >
      <div className="">
        <h1 className="font-bold text-4xl text-center pb-4">{props.title}</h1>
        <div className={`${props.classes}`}>
          {dataItem.map((item, index) => (
            <div key={index} id={`tracks-${index}`} className="p-4 w-full md:w-1/2">
              <h1 className="font-bold text-lg">{item.track}</h1>
              <ul className="list-disc ml-10">
                {item.topics.map((topic, index) => (
                  <li key={index} className="mt-1">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* {console.log(dataItem)} */}
      </div>
    </div>
  );
}
export default ListView;
