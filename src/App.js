import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './bootstrap-rtl.css'
import './App.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './General/Header'
import Footer from './General/Footer'
import Restaurants from './Pages/Restaurants/Restaurants'
import Restaurant from './Pages/Restaurant/Restaurant'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/restaurants/" component={Restaurants} />
        <Route path="/restaurant/" component={Restaurant} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
