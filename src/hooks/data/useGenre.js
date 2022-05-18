import { useState } from 'react'

const useGenre = () => {
    const [genre, setGenre] = useState('')

    return { genre, setGenre }
}

export default useGenre
