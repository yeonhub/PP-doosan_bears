import React, { useState } from 'react';
import '../assets/css/reset.css'
import './Main.scss'
import DoosanList from './DoosanList';
import DoosanInfo from './DoosanInfo';
import dataList from '../assets/api/DoosanData';
import { ysh53, yej25, kjh52, kdh37, jsb31, hkm13, csh51 } from '../assets/api/DoosanStatData'

const Main = () => {
    const [listData, setListData] = useState(dataList)
    const [content, setContent] = useState('DoosanProfile')
    const [statData, setStatData] = useState(ysh53)
    const [data, setData] = useState(dataList[0])
    const statDataMap = { ysh53, yej25, kjh52, kdh37, jsb31, hkm13, csh51 };
    const onSelect = (no, noname) => {
        const idx = listData.findIndex(item => item.no === no);
        setData(dataList[idx])
        setStatData(statDataMap[noname]);
    };
    const onMenu = (menu)=>{
        setContent(menu)
    }
    return (
        <div>
            <div id='wrap'>
                <div id='content'>
                    <div className='inner'>
                        <div className='img'>
                            <img className='logo' src='./images/doosanlogo.png' alt='' />
                        </div>
                        <DoosanList listData={listData} onSelect={onSelect} />
                        <DoosanInfo data={data} statData={statData} onMenu={onMenu} content={content}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;