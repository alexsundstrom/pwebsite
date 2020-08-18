import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';

const options = {
	autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};
ReactPixel.init('1012757025828167', options);

ReactPixel.pageView();


ReactGA.initialize('UA-166323214-2');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Alexander Sundström",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/' },
        { title: 'Contact', path: '/' },
      ],
      home: {
        title: 'Hero',
        subTitle: '--------------',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Lets Talk'
      },
    }
  }


  render() {
    return (
        <Router>
          <Container className="p-0" fluid={true}>
            
            <Navbar className="border-bottom" bg="transparent" expand="md">
              <Navbar.Brand>Alexander Sundström</Navbar.Brand>

              <Navbar.Toggle className="border-0" ria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>

                </Nav>
              </Navbar.Collapse>
            </Navbar>


            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} /> } />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} /> } />





          <Footer />


          </Container>

        </Router>
      );

  }
  
  
}

export default App;
