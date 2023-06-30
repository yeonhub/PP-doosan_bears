import React from 'react';

const DoosanItem = ({ item, onSelect }) => {
    const { id, imgurl, no, name, position, nameno } = item
    return (
        <>
            <li data-id={id} onClick={() => onSelect(no, nameno)}>
                <img src={imgurl} alt={name} />
                <p>
                    <em>{no}</em>
                    <strong>{position}</strong>
                </p>
                <span>{name}</span>
            </li>
        </>
    );
};

export default DoosanItem;