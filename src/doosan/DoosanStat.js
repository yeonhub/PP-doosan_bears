import React from 'react';

const DoosanStat = ({ statData, data }) => {
  return (
    <table className='stat'>
      <thead>
        <tr>
          <th colSpan={12} className='noth'>두산베어스 NO.{data.no}</th>
        </tr>
        <tr>
          <th colSpan={12} className='nameth'>{data.name}</th>
        </tr>
        <tr className='kbologo'>
          <th colSpan={12}>
            <a href="https://www.koreabaseball.com/Record/Player/HitterBasic/Basic1.aspx">
              <img src="./images/kbologo.png" alt="kbologo" />
            </a>
          </th>
        </tr>
        <tr>
          {Object.keys(statData[0]).map((key) => (
            <th key={key} className='stats'>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {statData.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoosanStat;