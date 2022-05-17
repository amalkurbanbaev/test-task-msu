import React from 'react'
import { Button, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { bg, colors, textColor } from '../theming/Theme'

const Menu = styled.ul`
    display: flex;
`

const MenuItem = styled.li`
    font-size: 20px;
    font-weight: 700;
    margin-right: 40px;
    transition: all 100ms;
    border-bottom: 3px solid transparent;
    padding-bottom: 5px;

    &:hover {
        color: ${colors.accent};
        border-bottom: 3px solid ${colors.accent};
    }
`

const SwitchButton = styled.button`
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 10px 20px;
    color: ${textColor};
    background: transparent;

    &:hover {
        border-color: ${colors.accent};
        color: ${colors.accent};
    }
`

const Header = ({ switchTheme }) => {
    return (
        <Col className="d-flex align-items-center justify-content-between">
            <Menu>
                <MenuItem>Главная</MenuItem>
                <MenuItem>Фильмы</MenuItem>
                <MenuItem>Сериалы</MenuItem>
            </Menu>
            <SwitchButton onClick={() => switchTheme()}>
                Сменить тему
            </SwitchButton>
        </Col>
    )
}

export default Header
