import React, { useState } from 'react'
import styled from 'styled-components'
import useComments from '../../../hooks/data/useComments'
import CommentsBox from './CommentsBox/CommentsBox'
import CommentsForm from './CommentsForm/CommentsForm'

const Wrapper = styled.div`
    margin-top: 45px;
`


const Comments = ({ comments, setComments, movieId }) => {
    return (
        <Wrapper>
           
            <CommentsForm
                movieId={movieId}
                comments={comments}
                setComments={setComments}
            />
            <CommentsBox
                movieId={movieId}
                comments={comments}
                setComments={setComments}
            />
        </Wrapper>
    )
}

export default Comments
