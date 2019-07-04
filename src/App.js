import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './bootstrap-rtl.css'
import './App.css'
import 'css-star-rating/css/star-rating.css'
import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './General/Header'
import Footer from './General/Footer'
import Restaurants from './Pages/Restaurants/Restaurants'
import Restaurant from './Pages/Restaurant/Restaurant'
import Main from './Pages/Home/Main'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Main} />
        <Route exact path="/restaurants/" component={Restaurants} />
        <Route path="/restaurants/:id" component={Restaurant} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
