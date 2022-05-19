import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, weakColor } from '../../Theming/Theme'

import IconHome from './Icons/IconHome'

const Wrapper = styled.div`
    margin-top: 60px;
`

const NavBox = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const NavItem = styled.li`
    font-size: 16px;
    font-weight: 300;
    transition: all 100ms;

    line-height: 41px;

    &:hover {
        color: ${colors.accent};
        border-right: 1px solid ${colors.accent};
    }
    &:hover > svg {
        stroke: #00b9ae;
    }
`

const NavSection = styled.span`
    color: #f9f9f9;
    color: ${weakColor};
`

const Nav = () => {
    return (
        <Wrapper>
            <NavSection>Menu</NavSection>
            <NavBox>
                <Link to="/">
                    <NavItem>
                        <IconHome />
                        Home
                    </NavItem>
                </Link>
            </NavBox>
        </Wrapper>
    )
}

export default Nav
