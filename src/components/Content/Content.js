import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import Header from './Header'
import Items from './Items/Items'
import { textColor } from '../Theming/Theme'
import PaginationComponent from './Pagination'

const Wrapper = styled.div`
    color: ${textColor};
    padding: 0 60px 50px;

    display: flex;
    flex-direction: column;

    transition: all 200ms;
`

const Content = ({ switchTheme, movies, page, setPage, genre, setGenre }) => {
    return (
        <Col xs={12}>
            <Wrapper>
                <Header
                    switchTheme={switchTheme}
                    genre={genre}
                    setGenre={setGenre}
                />
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
