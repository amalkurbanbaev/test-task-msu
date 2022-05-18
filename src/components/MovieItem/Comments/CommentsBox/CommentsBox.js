import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { colors, textColor } from '../../../Theming/Theme'
import { Button } from '../../../Theming/UI'

const CommentsWrapper = styled.div`
    margin-top: 20px;
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 24px;
`

const Comment = styled.div`
    padding: 15px 0;
`
const CommentAuthor = styled.span`
    font-weight: 700;
`
const CommentText = styled.div`
    margin-top: 10px;
    max-width: 70%;
`
const FirstComment = styled.div`
    margin-top: 20px;
    opacity: 0.5;
`
const DeleteButton = styled.button`
    background-color: transparent;
    border: none;
    opacity: 0.8;

    color: ${textColor};
    margin-top: 7px;
    padding: 0 0 3px;
    font-size: 12px;
    border-bottom: 2px solid ${colors.weakLight};
    &:hover {
        border-color: ${colors.accent};
    }
`

const CommentsBox = ({ comments, setComments }) => {
    const { id } = useParams()
    const movieComments = comments.filter((item) => item.movieId === id)

    const handleDelete = (comId) => {
        const updatedMovieComments = comments.filter(
            (item) => item.id !== comId
        )

        localStorage.setItem('comments', JSON.stringify(updatedMovieComments))
        setComments(updatedMovieComments)
    }

    return (
        <CommentsWrapper>
            <Title>Comments</Title>
            {movieComments.length > 0 ? (
                movieComments.map((com) => (
                    <Comment key={com.id}>
                        <CommentAuthor>{com.name}</CommentAuthor>
                        <CommentText>{com.text}</CommentText>
                        <DeleteButton onClick={() => handleDelete(com.id)}>
                            Delete
                        </DeleteButton>
                    </Comment>
                ))
            ) : (
                <FirstComment>Leave the first comment</FirstComment>
            )}
        </CommentsWrapper>
    )
}

export default CommentsBox
