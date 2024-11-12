import React from 'react';

const ImportantDatesTable = ({ dataItem }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Important Dates</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', color: '#333', textAlign: 'left' }}>
            <th style={{ padding: '12px', fontWeight: 'bold' }}>EVENTS</th>
            <th style={{ padding: '12px', fontWeight: 'bold' }}>DATE</th>
          </tr>
        </thead>
        <tbody>
          {dataItem.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fafafa' : 'white' }}>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd', fontWeight: index === 0 ? 'bold' : 'normal' }}>
                {row.event}
              </td>
              <td style={{ padding: '12px', borderBottom: '1px solid #ddd', color: '#333' }}>
                {row.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDatesTable;
