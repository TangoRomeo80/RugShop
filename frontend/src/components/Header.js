import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

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
              {/* <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                  Cart
                </Nav.Link>
              </LinkContainer> */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
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
              <LinkContainer to='/category/rug'>
                <Nav.Link>|Rug|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/bedding'>
                <Nav.Link>|Bedding|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/curtain'>
                <Nav.Link>|Curtain|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/cushion'>
                <Nav.Link>|Cushion|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/quilt'>
                <Nav.Link>|Duvet and Pillow|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/blanket'>
                <Nav.Link>|Blankets|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/tablemat'>
                <Nav.Link>|Table Mat|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/sofa'>
                <Nav.Link>|Sofa Cover|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/mink'>
                <Nav.Link>|Mink Throws|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/mattress'>
                <Nav.Link>|Mattress Protector|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/towel'>
                <Nav.Link>|Towels|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/bathroom'>
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
