import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import errorPage from './pages/errorPage';

const options = {
	autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};
ReactPixel.init('1012757025828167', options);

ReactPixel.pageView();


ReactGA.initialize('UA-166323214-2');
ReactGA.pageview(window.location.pathname + window.location.search);


const App = (props) => {

  return (
    <React.Fragment>
            <Router>
            <NavigationBar />
              
              
                <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path='*' component={errorPage} />
                </Switch>
                       
           
              <Footer />
            </Router>
    </React.Fragment>
  )
}


//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "Alexander Sundström",
//       headerLinks: [
//         { title: 'Home', path: '/' },
//         { title: 'About', path: '/' },
//         { title: 'Contact', path: '/' },
//       ],
//       home: {
//         title: 'Under Development',
//         subTitle: '------------------------------',
//         text: 'Checkout my projects below'
//       },
//       about: {
//         title: 'About Me'
//       },
//       contact: {
//         title: 'Lets Talk'
//       },
//     }
//   }


export default App;
