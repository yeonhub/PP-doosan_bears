import React, { useContext } from 'react';
import { HeaderContext } from '../Header';

const DSStatsUI = () => {
    const { currentPlayer, currentPlayerStats } = useContext(HeaderContext);
    return (
        <table className='stat'>
            <thead>
                <tr>
                    <th colSpan={12} className='noth'>두산베어스 NO.{currentPlayer.no}</th>
                </tr>
                <tr>
                    <th colSpan={12} className='nameth'>{currentPlayer.name}</th>
                </tr>
                <tr className='kbologo'>
                    <th colSpan={12}>
                        <a href={`https://www.koreabaseball.com/Record/Player/HitterDetail/Basic.aspx?playerId=${currentPlayer.kboId}`}>
                            <img src="./images/kbologo.png" alt="kbologo" />
                        </a>
                    </th>
                </tr>
                <tr>
                    {Object.keys(currentPlayerStats[0]).map((key) => (
                        <th key={key} className='stats'>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {currentPlayerStats.map((row, index) => (
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

export default DSStatsUI;