import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import RugScreen from './screens/RugScreen'
import BeddingScreen from './screens/BeddingScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/rug' component={RugScreen} />
          <Route path='/bedding' component={BeddingScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
