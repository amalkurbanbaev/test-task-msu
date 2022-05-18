import { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import reducer from './reducer/reducer'

// для промежуточных рассчётов или для сброса состояния
const init = (state) => ({ ...state })

// начальная модель нашего состояния
const initialData = {
    movies: [],
}

const useData = (page, genre) => {
    const [data, dispatch] = useReducer(reducer, initialData, init)

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(
                    'https://yts.mx/api/v2/list_movies.json',
                    {
                        params: {
                            limit: 16,
                            page,
                            genre,
                        },
                    }
                )
                dispatch({ type: 'movies', payload: response.data.data })
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [page, genre])
    return { data }
}

export default useData
