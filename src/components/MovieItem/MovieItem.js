import React from 'react'
import { Col, Row, Container, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Content/Header'
import Sidebar from '../Sidebar/Sidebar'
import { bg, bgSidebar, colors, textColor } from '../theming/Theme'
import useMovie from '../../hooks/data/useMovie'

const ContainerCustom = styled(Container)`
    background: ${bg};
`
const ColSidebar = styled(Col)`
    background: ${bgSidebar};
`

const Wrapper = styled.div`
    color: ${textColor};
    padding: 0 60px 50px;

    display: flex;
    flex-direction: column;

    transition: all 200ms;
`

const Title = styled.h1`
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 20px;
`
const Image = styled.img`
    max-width: 640px;
    margin-bottom: 20px;
`
const Description = styled.div``

const MovieItem = ({ switchTheme }) => {
    const { id } = useParams()
    const { movie } = useMovie(id)
    const item = movie.movie.movie || null

    return (
        <ContainerCustom fluid>
            <Row>
                <ColSidebar xs={2} className="vh-100 sticky-top">
                    <Sidebar />
                </ColSidebar>
                <Col xs={10}>
                    <Col xs={12}>
                        <Wrapper>
                            <Link to="/">
                                <Header />
                            </Link>

                            {item ? (
                                <>
                                    <Title>{item.title_long}</Title>
                                    <Image
                                        src={item.background_image_original}
                                    />
                                    <Description>
                                        {item.description_full}
                                    </Description>
                                </>
                            ) : (
                                <Spinner animation="border" />
                            )}
                        </Wrapper>
                    </Col>
                </Col>
            </Row>
        </ContainerCustom>
    )
}

export default MovieItem
