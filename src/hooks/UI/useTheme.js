import { useState } from 'react'

const useTheme = () => {
    const mode = JSON.parse(localStorage.getItem('theme'))
    const [isLight, setIsLight] = useState(mode)
    function switchTheme() {
        setIsLight(!isLight)
    }

    localStorage.setItem('theme', JSON.stringify(isLight))
    return { isLight, switchTheme }
}

export default useTheme
