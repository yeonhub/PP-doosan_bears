import React from 'react';

const DSPlayersUI = ({ data, onSelectPlayer }) => {
    return (
        <ul className='list'>
            {data.map(item => (
                <li key={item.id} data-id={item.id} onClick={() => onSelectPlayer(item.nameno)}>
                    <img src={item.imgurl} alt={item.name} />
                    <p>
                        <em>{item.no}</em>
                        <strong>{item.position}</strong>
                    </p>
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default DSPlayersUI;
