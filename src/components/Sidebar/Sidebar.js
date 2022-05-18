import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import { bgSidebar, textColor } from '../Theming/Theme'

const ColCustom = styled(Col)`
    padding-left: 0;
`

const Wrapper = styled.div`
    position: relative;
    background: ${bgSidebar};
    color: ${textColor};
    padding: 46px 0 0 20px;

    display: flex;
    flex-direction: column;

    transition: all 200ms;
`
const Copy = styled.div`
    position: absolute;
    bottom: 20px;
    font-size: 12px;
    opacity: 0.8;
`

const Sidebar = ({ setGenre }) => {
    return (
        <ColCustom xs={2} className="vh-100 sticky-top">
            <Wrapper className="vh-100 sticky-top">
                <Link to="/">
                    <Logo setGenre={setGenre} />
                </Link>
                <Nav />
                <Copy>Built With ❤ by {`Amal'`} Kurbanbaev</Copy>
            </Wrapper>
        </ColCustom>
    )
}

export default Sidebar
