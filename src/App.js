import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Theme } from './components/Theming/Theme'
import useTheme from './hooks/UI/useTheme'
import GlobalStyle from './components/Theming/GlobalStyle'
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

            <HashRouter>
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
                        element={
                            <MovieItem
                                switchTheme={switchTheme}
                                setGenre={setGenre}
                                genre={genre}
                            />
                        }
                    />

                    <Route path="*" element={<p>Theres nothing here!</p>} />
                </Routes>
            </HashRouter>
        </Theme>
    )
}

export default App
