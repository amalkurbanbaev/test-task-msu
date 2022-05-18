import { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import reducer from './reducer/reducer'

// для промежуточных рассчётов или для сброса состояния
const init = (state) => ({ ...state })

// начальная модель нашего состояния
const initialData = {
    movie: {},
}

const useMovie = (id) => {
    const [movie, dispatch] = useReducer(reducer, initialData, init)

    useEffect(() => {
        async function getMovie() {
            try {
                const response = await axios.get(
                    'https://yts.mx/api/v2/movie_details.json',
                    {
                        params: {
                            movie_id: id,
                        },
                    }
                )
                dispatch({ type: 'movie', payload: response.data.data })
            } catch (error) {
                console.error(error)
            }
        }

        getMovie()
    }, [id])
    return { movie }
}

export default useMovie
