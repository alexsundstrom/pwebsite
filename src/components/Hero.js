import React from 'react';
import TypeIt from 'typeit-react';


class Hero extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      
        title: 'Under Development',
     
    }
  }

  render(props) {
    return  (

      <div style={{padding: "50px", height: "40vh"}} className="App bg-danger pt-5 mb-5">
      <TypeIt
      
      element={"h1"}
      options={{
          loop: true,
          strings: [this.state.title],
          speed: 50,
          waitUntilVisible: false,
          
        }}
      />
    </div>
    );
    
  

    
  }
}






// const Hero = (props) => {
//     return (
//         <div style={{padding: "50px", height: "40vh"}} className="App bg-danger pt-5 mb-5">
//         <TypeIt
        
//         element={"h1"}
//         options={{
//             loop: true,
//             strings: ["Alexander Sundström", "Check out my projects below!", props.home.title],
//             speed: 100,
//             waitUntilVisible: false,
            
//           }}
//         />
//       </div>
//     )
// }


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
