import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { Col } from 'react-bootstrap'
import Header from './Header'
import Items from './Items/Items'
import { textColor } from '../Theming/Theme'
import PaginationComponent from './Pagination'
import NavState from '../../hooks/UI/navState'

const Wrapper = styled.div`
    color: ${textColor};
    padding: 0 60px 50px;

    display: flex;
    flex-direction: column;

    transition: all 200ms;

    ${down('lg')} {
        padding: 20px 0 120px;
    }
`

const Content = ({ switchTheme, movies, page, setPage, genre, setGenre }) => {
    return (
        <Col xs={12} lg={10}>
            <Wrapper>
                <NavState>
                    <Header
                        switchTheme={switchTheme}
                        genre={genre}
                        setGenre={setGenre}
                    />
                </NavState>
                <Items movies={movies} />
                <PaginationComponent
                    page={page}
                    setPage={setPage}
                    total={movies.movie_count}
                />
            </Wrapper>
        </Col>
    )
}

export default Content
