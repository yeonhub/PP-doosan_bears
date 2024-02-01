import React, { useContext } from 'react';
import { HeaderContext } from './Header';
import { DSPlayerData } from '../assets/api/DSPlayerData';
import DSPlayersUI from './DSPlayersUI'

const DSPlayers = () => {
    const { selectPlayer } = useContext(HeaderContext);

    const onSelectPlayer = (nameno) => {
        selectPlayer(nameno);
    };

    return <DSPlayersUI data={DSPlayerData} onSelectPlayer={onSelectPlayer} />;
};
export default DSPlayers;
