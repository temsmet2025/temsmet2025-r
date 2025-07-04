import { HeadingBar } from './SmallComps'

function TableView(props) {
    return (
        <div id={`${props.tableName}`} className={`${props.classes} `}>
            {props.tableName?.length > 0 && <h1 className="font-bold sm:text-2xl md:text-3xl text-xl text-sky-700">{props.tableName}</h1>}
            {(props.tableName !== undefined && props.tableName !== "") && <HeadingBar />}
            <div className={`${props.classes} overflow-x-auto mt-6 shadow-lg`}>
                <table className="w-full border-collapse rounded-lg">
                    <thead>
                        <tr className="bg-gray-800 text-gray-100 text-left">
                            {props.tableHead.length != 0 && props.tableHead.map((head, index) => (
                                <th key={index} className="px-6 py-4 font-bold">{head}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.dataItem.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-sky-300/25' : 'bg-white'}`}
                            >
                                {item.tableData.map((data, index) => (

                                    <td key={index}
                                        className={`px-6 py-4 border-b border-gray-300`}
                                    >
                                        {data}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TableView;