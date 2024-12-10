function TableView(props) {
    const highLightRow = 0;
    return (
        <div id={`table-${props.tableName}`} className={`pl-8 pr-8 pt-0 pb-0 sm:p-0 sm:ml-32  sm:mt-10 mb-5 `}>
            {props.tableName?.length > 0 && <h1 className="font-bold text-2xl sm:text-5xl text-gray-800">{props.tableName}</h1>}
            <div className={`${props.tableName === "" ? "hidden" : "mt-2 h-0.5 bg-gray-950 w-5/6"}`}></div>
            <div className={`${props.classes} overflow-x-auto mt-6 sm:mr-28 shadow-lg`}>
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
                                className={`${index % 2 === 0 ? 'bg-sky-300/25' : 'bg-white'} ${(props.tableName === 'Important Dates' && index === highLightRow && 'font-bold text-red-500')}`}
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