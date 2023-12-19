import React from 'react';
import DoosanProfile from './DoosanProfile';
import DoosanStat from './DoosanStat';
import DoosanClub from './DoosanClub';
import DoosanNews from './DoosanNews';
import DoosanYoutube from './DoosanYoutube';

const componentMap = {
    DoosanProfile, DoosanStat, DoosanClub, DoosanNews, DoosanYoutube
};

const DoosanCon = ({ data, statData, content }) => {
    const Component = componentMap[content] || null;

    return (
        <div className='con'>
            {Component && <Component data={data} statData={statData} />}
        </div>
    );
};

export default DoosanCon;
