import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

// небольшая дизайн система
export const colors = {
    white: '#F9F9F9',
    lightBg: '#ededed',
    black: '#16181E',
    dark: '#21242D',
    accent: '#00B9AE',
    weakDark: 'rgba(249, 249, 249, 0.67)',
    weakLight: 'rgba(0, 0, 0, 0.67)',
}

export const bg = theme('mode', {
    light: colors.lightBg,
    dark: colors.black,
})

export const bgSidebar = theme('mode', {
    light: colors.white,
    dark: colors.dark,
})

export const bgHeader = theme('mode', {
    light: colors.lightBg,
    dark: colors.black,
})

export const textColor = theme('mode', {
    light: colors.black,
    dark: colors.white,
})

export const textColorReverse = theme('mode', {
    light: colors.white,
    dark: colors.black,
})

export const weakColor = theme('mode', {
    light: colors.weakLight,
    dark: colors.weakDark,
})

export function Theme({ children, isLight }) {
    return (
        <ThemeProvider theme={{ mode: isLight ? 'light' : 'dark' }}>
            {children}
        </ThemeProvider>
    )
}
