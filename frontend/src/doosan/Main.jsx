import React from 'react';
import '../assets/css/reset.css'
import './Main.scss'
import { Header } from './Header';
import DSPlayers from './DSPlayers';
import DSImages from './DSImages';
import DSMenuUI from './DSMenuUI';
import { DSInfo } from './DSInfo';
import DSContent from './DSContent';
import DSContentContainer from './DSContentContainer';

const Main = () => {
    return (
        <>
            <Header>
                <Header.Logo />
                <DSPlayers />
                <DSInfo>
                    <DSImages />
                    <DSContentContainer>
                        <DSMenuUI />
                        <DSContent />
                    </DSContentContainer>
                </DSInfo>
            </Header>
        </>
    );
};

export default Main;