import React, { useContext } from 'react';
import { InfoContext } from './DSInfo'

import DSProfileUI from './DSContentComponet/DSProfileUI';
import DSStatsUI from './DSContentComponet/DSStatsUI';
import DSClubUI from './DSContentComponet/DSClubUI';
import DSNewsUI from './DSContentComponet/DSNewsUI';
import DSYoutubeUI from './DSContentComponet/DSYoutubeUI';

const componentMap = {
    DSProfileUI, DSStatsUI, DSClubUI, DSNewsUI, DSYoutubeUI
};

const DSContent = () => {
    const { content } = useContext(InfoContext)
    const Component = componentMap[content] || null;

    return (
        <div className='con'>
            {Component && <Component />}
        </div>
    );
};

export default DSContent;