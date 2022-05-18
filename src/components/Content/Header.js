import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { bgHeader, colors, textColor } from '../Theming/Theme'

const CustomCol = styled(Col)`
    background: ${bgHeader};
`

const Menu = styled.ul`
    display: flex;
    padding: 40px 0;
`

const MenuItem = styled.li`
    font-size: 20px;
    font-weight: 500;
    margin-right: 40px;
    transition: all 100ms;
    border-bottom: 3px solid transparent;
    padding-bottom: 7px;
    cursor: pointer;

    &:hover {
        color: ${colors.accent};
        border-bottom: 3px solid ${colors.accent};
    }

    border-bottom: ${(props) =>
        props.genre === props.genreItem && ` 3px solid ${colors.accent}`};
`

const SwitchButton = styled.button`
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 10px 20px;
    color: ${textColor};
    background: transparent;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        border-color: ${colors.accent};
        color: ${colors.accent};
    }
`

const Header = ({ switchTheme, genre, setGenre }) => {
    const menus = [
        { id: 1, genre: '', text: 'All' },
        { id: 2, genre: 'Action', text: 'Action' },
        { id: 3, genre: 'Comedy', text: 'Comedy' },
        { id: 4, genre: 'Drama', text: 'Drama' },
        { id: 5, genre: 'Fantasy', text: 'Fantasy' },
        { id: 6, genre: 'History', text: 'History' },
    ]

    return (
        <CustomCol className="d-flex align-items-center justify-content-between sticky-top w-100">
            <Menu>
                {menus.map((m) => (
                    <Link to="/" key={m.id}>
                        <MenuItem
                            genre={genre}
                            genreItem={m.genre}
                            onClick={() => setGenre(m.genre)}
                        >
                            {m.text}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
            <SwitchButton onClick={() => switchTheme()}>
                Switch theme
            </SwitchButton>
        </CustomCol>
    )
}

export default Header
