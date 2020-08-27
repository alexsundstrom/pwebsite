import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top p-3">
                        <Col className="p-0" md={11} xs={6}>
                        <a rel="noopener noreferrer" target="_blank" className="text-dark" href="https://github.com/alexsundstrom"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                        </a>
                        </Col>
                        <Col className="p-0" md={1} xs={6}>
                        ©Alexander 2020
                        </Col>
                    
                        <Col className="p-0" md={4} xs={1}>
                        <a rel="noopener noreferrer" target="_blank" className="text-dark" href="https://github.com/alexsundstrom"> <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                        </a>
                        </Col>
                        
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;