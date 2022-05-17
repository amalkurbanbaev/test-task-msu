import { useState } from 'react'

const useTheme = () => {
    const [isLight, setIsLight] = useState(false)
    function switchTheme() {
        setIsLight(!isLight)
    }
    return { isLight, switchTheme }
}

export default useTheme
