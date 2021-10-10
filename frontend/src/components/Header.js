import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
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
            <Route render={({ history }) => <SearchBox history={history} />} />
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
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer> */}
                </NavDropdown>
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
              <NavDropdown title='|Rugs|'>
                <LinkContainer to='/category/rug/none'>
                  <NavDropdown.Item>General</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/rug/3d'>
                  <NavDropdown.Item>3D Style</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/rug/pona'>
                  <NavDropdown.Item>Pona</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/rug/nova'>
                  <NavDropdown.Item>Nova</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='|Bedding|'>
                <LinkContainer to='/category/bedding/none'>
                  <NavDropdown.Item>General</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/complete'>
                  <NavDropdown.Item>Complete set</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/duvet'>
                  <NavDropdown.Item>Duvet set/Half set</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/sheet'>
                  <NavDropdown.Item>Sheet set</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/flat'>
                  <NavDropdown.Item>Flat sheet</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/fitted'>
                  <NavDropdown.Item>Fitted set</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/valance'>
                  <NavDropdown.Item>Valance sheet</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/1pc'>
                  <NavDropdown.Item>1 piece bedspread</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/3pc'>
                  <NavDropdown.Item>3 piece bedspread</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bedding/7pc'>
                  <NavDropdown.Item>7 piece comforter</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/category/curtain'>
                <Nav.Link>|Curtain|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/cushion'>
                <Nav.Link>|Cushion|</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/category/quilt'>
                <Nav.Link>|Quilt and Pillow|</Nav.Link>
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
