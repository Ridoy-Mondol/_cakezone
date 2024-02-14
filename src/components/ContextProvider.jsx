import React, { useState } from 'react'
import CreateContext from './CreateContext'
const ContextProvider = ({children}) => {
    const [showNavLink, setShowNavLink] = useState (false);
    const showNavItem = () => {
        setShowNavLink(!showNavLink);
    }
    return (
        <CreateContext.Provider value={{showNavLink, showNavItem}}>
            {children}
        </CreateContext.Provider>
    )
}

export default ContextProvider;
