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
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                        
                        </Col>
                        <Col className="p-0" md={1} xs={6}>
                        ©Alexander 2020
                        </Col>
                    
                        <Col className="p-0" md={4} xs={1}>
                        <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                        
                        </Col>
                        
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;