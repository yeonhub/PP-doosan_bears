import React from 'react';
import DoosanItem from './DoosanItem';

const DoosanList = ({ listData, onSelect }) => {
    return (
        <>
            <ul className='list'>
                {
                    listData.map(item => <DoosanItem key={item.id} item={item} onSelect={onSelect} />)
                }
            </ul>
        </>
    );
};

export default DoosanList;