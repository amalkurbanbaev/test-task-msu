import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Theme } from './components/theming/Theme'
import useTheme from './hooks/UI/useTheme'
import GlobalStyle from './components/theming/GlobalStyle'
import useData from './hooks/data/useData'
import usePagination from './hooks/data/usePagination'
import HomePage from './components/HomePage'
import MovieItem from './components/MovieItem/MovieItem'
import useGenre from './hooks/data/useGenre'

const App = () => {
    const { isLight, switchTheme } = useTheme()
    const { page, setPage } = usePagination()
    const { genre, setGenre } = useGenre()
    const { data } = useData(page, genre)

    return (
        <Theme isLight={isLight}>
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                data={data}
                                switchTheme={switchTheme}
                                page={page}
                                setPage={setPage}
                                genre={genre}
                                setGenre={setGenre}
                            />
                        }
                    />
                    <Route
                        path=":id"
                        element={<MovieItem switchTheme={switchTheme} />}
                    />

                    <Route path="*" element={<p>Theres nothing here!</p>} />
                </Routes>
            </BrowserRouter>
        </Theme>
    )
}

export default App
