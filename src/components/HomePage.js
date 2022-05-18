import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
import { bg, bgSidebar } from './Theming/Theme'

const ContainerCustom = styled(Container)`
    background: ${bg};
`
const ColSidebar = styled(Col)`
    background: ${bgSidebar};
`
const HomePage = ({ data, switchTheme, page, setPage, genre, setGenre }) => {
    return (
        <ContainerCustom fluid>
            <Row>
                <ColSidebar xs={2} className="vh-100 sticky-top">
                    <Sidebar />
                </ColSidebar>
                <Col xs={10}>
                    <Content
                        movies={data.movies}
                        switchTheme={switchTheme}
                        page={page}
                        setPage={setPage}
                        genre={genre}
                        setGenre={setGenre}
                    />
                </Col>
            </Row>
        </ContainerCustom>
    )
}

export default HomePage
