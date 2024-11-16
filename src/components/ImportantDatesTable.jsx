import React from 'react';

const ImportantDatesTable = ({ dataItem }) => {
  return (
    <div id="important-dates-section" className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8">
      <h1 className="font-bold text-2xl sm:text-4xl text-gray-800">Important Dates</h1>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-800 text-left">
              <th className="px-6 py-4 font-bold">EVENTS</th>
              <th className="px-6 py-4 font-bold">DATE</th>
            </tr>
          </thead>
          <tbody>
            {dataItem.map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td
                  className={`px-6 py-4 border-b border-gray-300 ${
                    index === 0 ? 'font-bold' : 'font-normal'
                  }`}
                >
                  {row.event}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                  {row.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDatesTable;
