import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import { Theme } from './components/theming/Theme'
import useTheme from './hooks/UI/useTheme'
import Sidebar from './components/Sidebar'
import Content from './components/Content/Content'
import GlobalStyle from './components/theming/GlobalStyle'

const App = () => {
    const { isLight, switchTheme } = useTheme()

    return (
        <Theme isLight={isLight}>
            <GlobalStyle />
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <Sidebar />
                    </Col>
                    <Col xs={9}>
                        <Content switchTheme={switchTheme} />
                    </Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </Theme>
    )
}

export default App
