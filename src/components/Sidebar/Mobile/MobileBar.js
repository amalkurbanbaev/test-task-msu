import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { bgSidebar, colors, textColor } from '../../Theming/Theme'
import IconHome from '../Nav/Icons/IconHome'

const Wrapper = styled.div`
    width: 100%;
    height: 75px;
    background: ${bgSidebar};
    align-items: flex-end;
    padding-bottom: 5px;
    justify-content: center;
    z-index: 999;
`

const NavItem = styled.li`
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    transition: all 100ms;
    padding: 0 5px 11px;
    border-bottom: 2px solid ${colors.accent};
    color: ${textColor};
    text-transform: uppercase;
    font-size: 12px;
`

const MobileBar = () => {
    return (
        <Wrapper className="position-fixed bottom-0  d-flex d-lg-none active">
            <NavItem>
                <Link to="/">
                    <IconHome mr="0" pb="5px" />
                    <br />
                    HOME
                </Link>
            </NavItem>
        </Wrapper>
    )
}

export default MobileBar
