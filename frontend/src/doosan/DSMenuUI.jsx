import React, { useContext, useState } from 'react';
import { InfoContext } from './DSInfo'

const DSMenuUI = () => {
    const { onMenu,content } = useContext(InfoContext)
    return (
        <div className='menu'>
            <ul className='menu'>
                <li onClick={() => onMenu('DSProfileUI')}
                    className={`submenu ${content === 'DSProfileUI' ? 'on' : ''}`}
                > Profile </li>
                <li onClick={() => onMenu('DSClubUI')}
                    className={`submenu ${content === 'DSClubUI' ? 'on' : ''}`}
                > Club </li>
                <li onClick={() => onMenu('DSStatsUI')}
                    className={`submenu ${content === 'DSStatsUI' ? 'on' : ''}`}
                > Stats </li>
                <li onClick={() => onMenu('DSNewsUI')}
                    className={`submenu ${content === 'DSNewsUI' ? 'on' : ''}`}
                > News </li>
                <li onClick={() => onMenu('DSYoutubeUI')}
                    className={`submenu ${content === 'DSYoutubeUI' ? 'on' : ''}`}
                > Youtube </li>
            </ul>
        </div>
    );
};

export default DSMenuUI;