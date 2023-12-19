import React, { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../Header';
import { fetchNewsItems } from './newsService'; 

const DSNewsUI = () => {
    const { currentPlayer } = useContext(HeaderContext);
    const { no, name } = currentPlayer;
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const items = await fetchNewsItems(name); 
            setNewsItems(items);
        };
        fetchData();
    }, [name]);

    return (
        <div className='news'>
        <p className='noth'>두산베어스 NO.{no}</p>
        <p className='nameth'>{name}</p>
        <p className='naversports'><a href="https://sports.news.naver.com/index"><img src="./images/naversports.png" alt="naversports" /></a></p>
        {
            newsItems.map((item, index) => (
                <ul className='newsUl' key={index}>
                    <li className='newsLi'>
                        <a className='newsA' href={item.link}>
                            <p className='title'>{item.title}</p>
                            <p className='desc'>{item.description}</p>
                        </a>
                    </li>
                </ul>
            ))
        }
    </div>
    );
};

export default DSNewsUI;
