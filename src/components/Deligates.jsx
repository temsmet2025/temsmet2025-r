import React from 'react';

const Deligates = ({ dataItem }) => {
  return (
    <div id="deligates-section" className="sm:ml-32 sm:mr-32 sm:mt-10 sm:mb-10 p-8">
      <h1 className="font-bold text-2xl sm:text-4xl text-gray-800">Registration</h1>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-800 text-left">
              <th className="px-6 py-4 font-bold">DELIGATES</th>
              <th className="px-6 py-4 font-bold">FEES</th>
            </tr>
          </thead>
          <tbody>
            {dataItem.map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="px-6 py-4 border-b border-gray-300">
                  <span className="font-bold">{row.deligate}</span>
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                  {row.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deligates;
