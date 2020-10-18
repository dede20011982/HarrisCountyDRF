import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Gallery from './components/pages/Gallery';
import ContactUs from './components/pages/ContactUs';
import BusinessSupporters from './components/pages/BusinessSupporters';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>      
        <Route path='/' exact component= {Home} />
        <Route path='/about-us' component= {AboutUs} />
        <Route path='/gallery' component= {Gallery} />
        <Route path='/contact-us' component= {ContactUs} />
        <Route path='/business-supporters' component= {BusinessSupporters} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
