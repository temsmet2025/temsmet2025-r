import React from 'react';

const Deligates = ({ dataItem }) => {
  return (
    <div style={{ margin: '0 auto', padding: '20px', maxWidth: '1100px', boxSizing: 'border-box' }}>
      <h1 className='font-bold sm:text-4xl text-2xl text-gray-800'>Registration</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#e0e0e0', color: '#333', textAlign: 'left' }}>
            <th style={{ padding: '12px', fontWeight: 'bold' }}>DELIGATES</th>
            <th style={{ padding: '12px', fontWeight: 'bold' }}>FEES</th>
          </tr>
        </thead>
        <tbody>
          {dataItem.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fafafa' : 'white' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd', fontWeight: 'normal' }}>
                {row.deligate}
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd', color: '#333' }}>
                {row.fee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deligates;
