import React, { useEffect } from 'react'
import { Col, Row, Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Content/Header'
import Sidebar from '../Sidebar/Sidebar'
import { bg, bgSidebar, colors, textColor } from '../Theming/Theme'
import useMovie from '../../hooks/data/useMovie'
import Comments from './Comments/Comments'
import useComments from '../../hooks/data/useComments'

const ContainerCustom = styled(Container)`
    background: ${bg};
    min-height: 100vh;
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
    max-width: 320px;
    margin-bottom: 20px;
`
const Description = styled.div`
    max-width: 50%;
`

const MovieItem = ({ switchTheme, genre, setGenre }) => {
    const { id } = useParams()
    const { movie } = useMovie(id)
    const item = movie.movie.movie || null
    const { comments, setComments } = useComments(id)

    return (
        <ContainerCustom fluid>
            <Row>
                <Sidebar setGenre={setGenre} />

                <Col xs={10}>
                    <Col xs={12}>
                        <Wrapper>
                            <Header
                                switchTheme={switchTheme}
                                genre={genre}
                                setGenre={setGenre}
                            />

                            {item ? (
                                <>
                                    <Title>{item.title_long}</Title>
                                    <Image src={item.medium_cover_image} />
                                    <Description>
                                        {item.description_full}
                                    </Description>
                                </>
                            ) : (
                                <Spinner animation="border" />
                            )}
                            <Comments
                                comments={comments}
                                setComments={setComments}
                                movieId={id}
                            />
                        </Wrapper>
                    </Col>
                </Col>
            </Row>
        </ContainerCustom>
    )
}

export default MovieItem
