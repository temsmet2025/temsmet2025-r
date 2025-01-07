// used for call-for-papers
import { HeadingBar } from './SmallComps'
function ListView(props) {
  const dataItem = props.data;
  return (
    <div
      id={`${props.title}`}
      className="mt-8 mb-8 p-5 sm:mt-10 sm:p-5 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl sm:text-3xl text-center text-sky-700">{props.title}</h1>
        <HeadingBar classes="w-full" />
        <div className={`${props.classes} grid grid-cols-1 lg:grid-cols-2 mt-5 gap-10 text-wrap text-justify md:mt-7 lg:mt-10`}>
          {dataItem.map((item, index) => (
            <div key={index} id={`tracks-${index}`} className={`w-full h-full  text-justify p-8 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out ${item.textColor}  ${item.bgColor}`}>
              <h1 className="font-bold text-lg sm:text-xl">{item.track}</h1>
              <ul className="list-disc text-base sm:text-lg ml-6 sm:ml-10">
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
