import React from 'react';
import DoosanImg from './DoosanImg';
import DoosanMenu from './DoosanMenu';

const DoosanInfo = ({ data, statData, onMenu,content }) => {
    return (
        <div className='info'>
            <DoosanImg data={data} />
            <DoosanMenu data={data} statData={statData} onMenu={onMenu}content={content} />
        </div>
    );
};

export default DoosanInfo;