import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Nav'
import SectionDerecha from './components/SectionDerecha'
import SectionIzquierda from './components/SectionIzquierda'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <SectionIzquierda />
        </Col>

        <Col md={6}>
          <SectionDerecha />
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
