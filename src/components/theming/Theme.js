import React from 'react'
import { ThemeProvider, css } from 'styled-components'
import theme from 'styled-theming'

export const colors = {
    white: '#F9F9F9',
    black: '#16181E',
    dark: '#21242D',
    accent: '#00B9AE',
}

// небольшая дизайн система
export const bg = theme('mode', {
    light: colors.white,
    dark: colors.black,
})

export const textColor = theme('mode', {
    light: colors.black,
    dark: colors.white,
})

export function Theme({ children, isLight }) {
    return (
        <ThemeProvider theme={{ mode: isLight ? 'light' : 'dark' }}>
            {children}
        </ThemeProvider>
    )
}
