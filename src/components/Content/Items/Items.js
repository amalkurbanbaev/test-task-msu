import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from '../../Theming/UI'
import { Card, Details, Info, Title, WatchButton, Wrapper } from './style'

const Items = ({ movies }) => {
    const data = movies.movies || []
    return (
        <Wrapper>
            {data.length !== 0 ? (
                data.map((item) => (
                    <Link to={`/${item.id}`} key={item.id}>
                        <Card md={3} image={item.large_cover_image}>
                            <Title>{item.title}</Title>
                            <Info>
                                <Details>
                                    {item.year} <br />{' '}
                                    {item.genres ? item.genres[0] : 'Other'}
                                </Details>
                                <Button float="right" text="Watch" />
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
