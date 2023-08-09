import { createContext, useState } from 'react';


export const Context = createContext(null);

const EduContext = ({ children }) => {

    const [ leftRoute, setLeftRoute ] = useState(0)
    const [ tcLeftRoute, setTcLeftRoute ] = useState(0)

    const value = { leftRoute, setLeftRoute, tcLeftRoute, setTcLeftRoute }
    return (

        <Context.Provider value={value}>
            <div className=' bg-blur-md bg-gradient-to-r from-purple-200 to-blue-100 '>{children}</div>
        </Context.Provider>

    );
};

export default EduContext;