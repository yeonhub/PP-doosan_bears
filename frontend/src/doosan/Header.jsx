// Header.jsx
import React, { createContext, useState } from 'react';
import { DSPlayerData } from '../assets/api/DSPlayerData'
import { ysh53, yej25, kjh52, kdh37, jsb31, hkm13, csh51 } from '../assets/api/DSStatsData'
const HeaderContext = createContext();


const Header = ({ children }) => {
    const [currentPlayer, setCurrentPlayer] = useState(DSPlayerData[0]);
    const [currentPlayerStats, setCurrentPlayerStats] = useState(ysh53);
    const statDataMap = { ysh53, yej25, kjh52, kdh37, jsb31, hkm13, csh51 };

    const selectPlayer = (nameno) => {
        const updatedPlayer = DSPlayerData.find(data => data.nameno === nameno);
        setCurrentPlayer(updatedPlayer);
        setCurrentPlayerStats(statDataMap[nameno])
    };

    return (
        <HeaderContext.Provider value={{ selectPlayer, currentPlayer, currentPlayerStats }}>
            <div id='wrap'>
                <div id='content'>
                    <div className='inner'>
                        {children}
                    </div>
                </div>
            </div>
        </HeaderContext.Provider>
    );
};

const HeaderLogo = () => {
    return (
        <div className='img'>
            <img className='logo' src='./images/doosanlogo.png' alt='' />
        </div>
    );
};

Header.Logo = HeaderLogo;

export { Header, HeaderContext };
