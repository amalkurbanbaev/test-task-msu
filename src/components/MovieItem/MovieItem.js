import React from 'react'
import { Col, Row, Container, Spinner } from 'react-bootstrap'
import { down } from 'styled-breakpoints'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Content/Header'
import Sidebar from '../Sidebar/Sidebar'
import { bg, textColor } from '../Theming/Theme'
import useMovie from '../../hooks/data/useMovie'
import Comments from './Comments/Comments'
import useComments from '../../hooks/data/useComments'
import NavState from '../../hooks/UI/navState'

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

    ${down('lg')} {
        padding: 20px 0 120px;
    }
`

const Title = styled.h1`
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 20px;
    ${down('lg')} {
        text-align: center;
    }
`
const Image = styled.img`
    max-width: 320px;
    margin-bottom: 20px;

    ${down('lg')} {
        margin: 0 auto;

        max-width: 500px;
        padding: 0 40px;
        margin-bottom: 40px;
    }
`
const Description = styled.div`
    max-width: 50%;
    line-height: 20px;

    ${down('lg')} {
        max-width: 100%;
        line-height: 30px;
        text-align: justify;
    }
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

                <Col xs={12} lg={10}>
                    <Wrapper>
                        <NavState>
                            <Header
                                switchTheme={switchTheme}
                                genre={genre}
                                setGenre={setGenre}
                            />
                        </NavState>

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
            </Row>
        </ContainerCustom>
    )
}

export default MovieItem
