import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container fluid className='bg-dark'>
        <Row>
          <Col className='text-center py-3 contact-footer'>
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className='fa fa-phone'></i>+44 7877 980930
              </li>
              <li>
                <i className='fa fa-envelope-o'></i>abdulhay2014@hotmail.com
              </li>
              <li>
                <i class='fa fa-flag'></i>Unit: 3 and 4, Eastham Market,
                Pilsgrims way, London, United Kingdom
              </li>
            </ul>
            <h6>Copyright &copy; MS Bedding and Rugs</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
