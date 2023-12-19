import React, { createContext, useState } from 'react';
const InfoContext = createContext();

const DSInfo = ({ children }) => {
    const [content, setContent] = useState('DSProfileUI')
    
    const onMenu = (menu) => {
        setContent(menu)
    }

    return (
        <InfoContext.Provider value={{ content, onMenu }}>
            <div className='info'>
                {children}
            </div>
        </InfoContext.Provider>
    );
};

export { DSInfo, InfoContext };