import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import Header from './Header'
import Items from './Items/Items'
import { bg, textColor } from '../theming/Theme'

const Wrapper = styled.div`
    background: ${bg};
    color: ${textColor};
    padding: 56px 60px;

    display: flex;
    flex-direction: column;

    transition: all 200ms;
`

const Content = ({ switchTheme }) => {
    return (
        <Col xs={12}>
            <Wrapper>
                <Header switchTheme={switchTheme} />
                <Items xs={9} />
            </Wrapper>
        </Col>
    )
}

export default Content
