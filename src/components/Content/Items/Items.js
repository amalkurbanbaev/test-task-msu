import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card, Details, Info, Title, WatchButton, Wrapper } from './style'

const Items = ({ movies }) => {
    console.log(movies)
    const data = movies.movies || []
    return (
        <Wrapper>
            {data.length !== 0 ? (
                data.map((item) => (
                    <Link to={`/${item.id}`} key={item.id}>
                        <Card md={3} image={item.background_image_original}>
                            <Title>{item.title}</Title>
                            <Info>
                                <Details>
                                    {item.year} <br />{' '}
                                    {item.genres ? item.genres[0] : 'Other'}
                                </Details>
                                <WatchButton>Смотреть</WatchButton>
                            </Info>
                        </Card>
                    </Link>
                ))
            ) : (
                <Spinner animation="border" />
            )}
        </Wrapper>
    )
}

export default Items
