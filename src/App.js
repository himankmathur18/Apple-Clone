import './App.css';
import Home from './Cpmponents/Store/Home';
import Macpages from './Cpmponents/Mac/Macpages';
import Ipadpages from './Cpmponents/iPad/Ipadpages'
import Storepages from './Cpmponents/Store/Storepages';
import Iphonepages from './Cpmponents/iPhone/Iphonepages'
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
      <Home />
        <Routes>       
          <Route path="/Store" element={<Storepages />} />
          <Route path="/Mac" element={< Macpages/>} /> 
          <Route path="/iPad" element={< Ipadpages/>} /> 
          <Route path="/iPhone" element={< Iphonepages/>} /> 
        </Routes>
    </Router>
    );
  }
}