import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import { bg, textColor } from '../Theming/Theme'

const Wrapper = styled.div`
    color: ${textColor};
    padding: 46px 0 0 20px;

    display: flex;
    flex-direction: column;

    transition: all 200ms;
`

const Sidebar = () => {
    return (
        <Row>
            <Col>
                <Wrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Nav />
                </Wrapper>
            </Col>
        </Row>
    )
}

export default Sidebar
