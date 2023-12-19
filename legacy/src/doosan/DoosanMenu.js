import React from 'react';
import DoosanCon from './DoosanCon';

const DoosanMenu = ({ data, statData, onMenu, content }) => {
    return (
        <div className='menubox'>
            <ul className='menu'>
                <li onClick={() => onMenu('DoosanProfile')} 
                    className={`submenu ${content === 'DoosanProfile' ? 'on' : ''}`}
                > Profile </li>
                <li onClick={() => onMenu('DoosanClub')} 
                    className={`submenu ${content === 'DoosanClub' ? 'on' : ''}`}
                > Club </li>
                <li onClick={() => onMenu('DoosanStat')} 
                    className={`submenu ${content === 'DoosanStat' ? 'on' : ''}`}
                > Stats </li>
                <li onClick={() => onMenu('DoosanNews')} 
                    className={`submenu ${content === 'DoosanNews' ? 'on' : ''}`}
                > News </li>
                <li onClick={() => onMenu('DoosanYoutube')} 
                    className={`submenu ${content === 'DoosanYoutube' ? 'on' : ''}`}
                > Youtube </li>
            </ul>
            <DoosanCon data={data} statData={statData} content={content} />
        </div>
    );
};

export default DoosanMenu;
