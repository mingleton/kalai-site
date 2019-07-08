import React, { Component } from 'react';
import Header from './header/header';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fontawesome/free-solid-svg-icons";


import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Weddings from './pages/weddings';
import Business from './pages/business';
import Footer from './footer';

// library.add(faPhone);

export default class App extends Component {
  render() {
    return (
      <div className='container'>

        <Router>
          <div>
            <Header />

            <Switch>    

              <Route exact path = "/" component={Home} />

              
              <Route path= "/about" component = {About} />
              
              <Route path= "/contact" component= {Contact}/>

              <Route path= "/weddings" component={Weddings}/>

              <Route path="/business" component={Business}/>
            </Switch>
          </div>
        </Router>
     
        <Footer />

      </div>
    );
  }
}
