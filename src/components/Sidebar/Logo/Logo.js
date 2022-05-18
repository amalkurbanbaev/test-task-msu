import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderLogo = styled.div`
    width: 100%;
`
const Heading = styled.h1`
    text-transform: uppercase;

    span {
        font-family: 'Open Sans', sans-serif;
    }
`
const Best = styled.span`
    font-size: 32px;
    font-weight: 900;
`
const Movies = styled.span`
    font-size: 24px;
`

const Logo = ({ setGenre }) => {
    return (
        <HeaderLogo onClick={() => setGenre('')}>
            <Heading>
                <Best>Best</Best> <br />
                <Movies>Movies</Movies>
            </Heading>
        </HeaderLogo>
    )
}

export default Logo
