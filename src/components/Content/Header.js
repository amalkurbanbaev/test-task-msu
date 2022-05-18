import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { bg, bgHeader, colors, textColor } from '../theming/Theme'

const CustomCol = styled(Col)`
    background: ${bgHeader};
`

const Menu = styled.ul`
    display: flex;
    padding: 56px 0;
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
    return (
        <CustomCol className="d-flex align-items-center justify-content-between sticky-top w-100">
            <Menu>
                <Link to="/">
                    <MenuItem
                        genre={genre}
                        genreItem=""
                        onClick={() => setGenre('')}
                    >
                        All
                    </MenuItem>
                </Link>
                <Link to="/">
                    <MenuItem
                        genre={genre}
                        genreItem="Action"
                        onClick={() => setGenre('Action')}
                    >
                        Actions
                    </MenuItem>
                </Link>
                <Link to="/">
                    <MenuItem
                        genre={genre}
                        genreItem="Comedy"
                        onClick={() => setGenre('Comedy')}
                    >
                        Comedy
                    </MenuItem>
                </Link>
                <Link to="/">
                    <MenuItem
                        genre={genre}
                        genreItem="Drama"
                        onClick={() => setGenre('Drama')}
                    >
                        Drama
                    </MenuItem>
                </Link>
                <Link to="/">
                    <MenuItem
                        genre={genre}
                        genreItem="Fantasy"
                        onClick={() => setGenre('Fantasy')}
                    >
                        Fantasy
                    </MenuItem>
                </Link>
                <Link to="/">
                    <MenuItem
                        genre={genre}
                        genreItem="History"
                        onClick={() => setGenre('History')}
                    >
                        History
                    </MenuItem>
                </Link>
            </Menu>
            <SwitchButton onClick={() => switchTheme()}>
                Сменить тему
            </SwitchButton>
        </CustomCol>
    )
}

export default Header
