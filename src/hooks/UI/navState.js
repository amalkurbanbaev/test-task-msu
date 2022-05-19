/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useMemo, useState } from 'react'

export const MenuContext = createContext({
    isMenuOpen: false,
    toggleMenu: () => {},
})

const NavState = ({ children }) => {
    const [isMenuOpen, toggleMenu] = useState(false)

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen)
    }

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
            {children}
        </MenuContext.Provider>
    )
}

export default NavState
