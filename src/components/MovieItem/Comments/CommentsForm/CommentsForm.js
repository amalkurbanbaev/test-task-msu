import React, { useEffect, useState } from 'react'
import { Button } from '../../../Theming/UI'
import { FormArea, LabelInput, NameInput, TextInput } from './style'

const CommentsForm = ({ comments, setComments, movieId }) => {
    function getIdComment() {
        const ms = new Date()
        return ms.getTime()
    }

    const initialValue = {
        id: null,
        movieId: null,
        name: '',
        text: '',
    }
    const [comment, setComment] = useState(initialValue)

    console.log(comments)

    // достаем из localStorage комменты, и ставим их в comments
    useEffect(() => {
        if (localStorage.getItem('comments')) {
            setComments(JSON.parse(localStorage.getItem('comments')))
        }
    }, [setComments])

    const formHandler = (e) => {
        e.preventDefault()

        // создаем копию коммента
        const currentComments = comments
        const comId = comment.id
        const comMovieId = comment.movieId
        const comName = comment.name
        const comText = comment.text
        if (comName && comText) {
            const newComment = {
                id: comId,
                movieId: comMovieId,
                name: comName,
                text: comText,
            }
            // новый коммент пушим в специальную копию, что бы засетить в localStorage
            currentComments.unshift(newComment)
            localStorage.setItem('comments', JSON.stringify(currentComments))
        }

        // и теперь можно перерендерить компонент с новым комментом из localStorage
        if (localStorage.getItem('comments')) {
            setComments(JSON.parse(localStorage.getItem('comments')))
        }

        setComment(initialValue)
    }

    const handleInput = (e) => {
        const { name } = e.target
        setComment({
            ...comment,
            ...{ id: getIdComment(), movieId, [name]: e.target.value },
        })
    }

    return (
        <FormArea onSubmit={(e) => formHandler(e)}>
            <LabelInput>
                Name
                <NameInput
                    name="name"
                    type="text"
                    required
                    maxLength="11"
                    value={comment.name}
                    onChange={(e) => handleInput(e)}
                />
            </LabelInput>
            <LabelInput>
                Comment
                <TextInput
                    name="text"
                    type="text"
                    value={comment.text}
                    maxLength="140"
                    required
                    onChange={(e) => handleInput(e)}
                />
            </LabelInput>
            <Button
                text="Submit"
                type="submit"
                disabled={comment.id === initialValue.id}
            />
        </FormArea>
    )
}

export default CommentsForm
