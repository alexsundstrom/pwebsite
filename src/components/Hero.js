import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import TypeIt from 'typeit-react';

const Hero = () => {
    return (
        <Container style={{padding: "50px"}} className="App">
        <TypeIt 
            element={"h1"}
          options={{
            strings: ["Alexander Sundström"],
            speed: 250,
            waitUntilVisible: false
          }}
        />
      </Container>
    )
}


// function Hero(props) {
//     return(

//         <Jumbotron className="bg-transparent jumbotron-fluid">
//             <Container fluid={true}>
//                 <Row className="justify-content-center">
//                     <Col md={4} sm={12}>
//                         { props.title && <h1>{props.title}</h1> }
//                         { props.subTitle && <h3>{props.subTitle}</h3> }
//                         { props.text && <h3>{props.text}</h3> }
//                     </Col>
//                 </Row>
//             </Container>
//         </Jumbotron>

//     );

// }




export default Hero
