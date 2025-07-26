// used for call-for-papers
import { HeadingBar } from './SmallComps'
function ListView(props) {
  const dataItem = props.data;
  return (
    <div
      id={`${props.title}`}
      className=""
    >
      {/* <div className="bg-green-400 text-gray-800 bg-blue-500 text-yellow-100 bg-orange-400 text-yellow-950 bg-purple-400 text-white bg-red-400 text-white bg-yellow-400 text-gray-800"></div> */}
      <div className="flex flex-col justify-center items-center">
        <div className="hidden text-[#3D0301] text-[#F5F5F5] text-[#FDF6B2] text-[#1F2937] text-[#FFFFFF]"></div>
        <h1 className="font-bold text-2xl sm:text-3xl text-start text-sky-700">{props.title}</h1>
        <HeadingBar classes="w-full" />
        <div className={`${props.classes} grid grid-cols-1 lg:grid-cols-2 mt-5 gap-3 text-wrap text-justify`}>
          {dataItem.map((item, index) => (
            <div key={index} id={`tracks-${index}`} className={`w-full h-full  text-justify p-8 rounded-lg hover:scale-[1.02] transition-all duration-300 ease-in-out ${item.textColor}  ${item.bgColor}`}>
              <h1 className={`text-[${item.chair_color}] font-bold`}>Chairs: { item.chairs }</h1>
              <h1 className={`text-[${item.chair_color}] font-bold`}>Co-Chairs: { item.co_chairs }</h1>
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
