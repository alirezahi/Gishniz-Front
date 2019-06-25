import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './bootstrap-rtl.css'

import Header from './General/Header'
import Footer from './General/Footer'
import Restaurants from './Pages/Restaurants/Restaurants'

function App() {
  return (
    <div className="App">
      <Header/>
      <Restaurants/>
      <Footer/>
    </div>
  );
}

export default App;
