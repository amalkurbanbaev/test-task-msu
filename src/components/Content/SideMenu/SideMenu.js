import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { MenuContext } from '../../../hooks/UI/navState'
import { bgHeader, colors, textColor } from '../../Theming/Theme'

const Wrapper = styled.div`
    background: ${bgHeader};
    color: ${textColor};

    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 293;
    display: block;
    width: 250px;
    max-width: 100%;
    margin-top: 0px;
    padding-top: 100px;
    padding-right: 0px;

    transform: translateX(-100%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${(props) =>
        props.open &&
        css`
            transform: translateX(0);
        `}
`

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
`

const MenuItem = styled.li`
    font-size: 22px;
    font-weight: 500;

    transition: all 100ms;
    border-bottom: 3px solid transparent;
    line-height: 70px;

    border-bottom: ${(props) =>
        props.genre === props.genreItem && ` 3px solid ${colors.accent}`};
`

const SideMenu = React.forwardRef((props, node) => {
    const { isMenuOpen } = useContext(MenuContext)
    return (
        <Wrapper open={isMenuOpen} ref={node} className="d-block d-lg-none">
            <Menu>
                {props.menus.map((m) => (
                    <Link to="/" key={m.id}>
                        <MenuItem
                            genre={props.Menugenre}
                            genreItem={m.genre}
                            onClick={() => props.setGenre(m.genre)}
                        >
                            {m.text}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </Wrapper>
    )
})

export default SideMenu
