import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
import { bg } from './Theming/Theme'

const ContainerCustom = styled(Container)`
    background: ${bg};
`

const HomePage = ({ data, switchTheme, page, setPage, genre, setGenre }) => {
    return (
        <ContainerCustom fluid>
            <Row>
                <Sidebar setGenre={setGenre} />
                <Content
                    movies={data.movies}
                    switchTheme={switchTheme}
                    page={page}
                    setPage={setPage}
                    genre={genre}
                    setGenre={setGenre}
                />
            </Row>
        </ContainerCustom>
    )
}

export default HomePage
