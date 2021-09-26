import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      {/* upper navbar */}
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='#'>
              <img alt='logo' src='/images/Main-Logo.png' height='60px' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* section selection bar */}
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {/* <Navbar.Brand href="/">RugShop</Navbar.Brand> */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-auto'>
              <LinkContainer to='/rug'>
                <Nav.Link>|Rug|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/bedding'>
                <Nav.Link>|Bedding|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/curtain'>
                <Nav.Link>|Curtain|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cushion'>
                <Nav.Link>|Cushion|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/quilt'>
                <Nav.Link>|Quilt and Pillow|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/blanket'>
                <Nav.Link>|Blankets|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/tablemat'>
                <Nav.Link>|Table Mat|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/sofa'>
                <Nav.Link>|Sofa Cover|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mink'>
                <Nav.Link>|Mink Throws|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mattress'>
                <Nav.Link>|Mattress Protector|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/towel'>
                <Nav.Link>|Towels|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/bathroom'>
                <Nav.Link>|Bathroom Sets|</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
