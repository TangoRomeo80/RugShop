import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      {/* upper navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#">
            <img alt="logo" src="/images/Main-Logo.png" height="60px"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>
                Cart
              </Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* section selection bar */}
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* <Navbar.Brand href="/">RugShop</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link href="/rug">|Rug|</Nav.Link>
              <Nav.Link href="/bedding">|Bedding|</Nav.Link>
              <Nav.Link href="/curtain">|Curtain|</Nav.Link>
              <Nav.Link href="/cushion">|Cushion|</Nav.Link>
              <Nav.Link href="/quilt">|Quilt and Pillow|</Nav.Link>
              <Nav.Link href="/blanket">|Blankets|</Nav.Link>
              <Nav.Link href="/tableMat">|Table Mat|</Nav.Link>
              <Nav.Link href="/sofa">|Sofa Cover|</Nav.Link>
              <Nav.Link href="/mink">|Mink Throws|</Nav.Link>
              <Nav.Link href="/mattress">|Mattress Protector|</Nav.Link>
              <Nav.Link href="/towel">|Towels|</Nav.Link>
              <Nav.Link href="/bathroom">|Bathroom Sets|</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
