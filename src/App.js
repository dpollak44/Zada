import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import PT from './details/physicalTherapy.js';
import Nutrition from './details/nutrition.js';
import Bios from './pages/bios.js';
import './App.css';

function App() {

  return (
    <BrowserRouter >

      <>
        <header>
          <div class="flex-container">
            <div class="logo">
              <h1 ><a href="#">ZADA<i>Rehab</i></a></h1>
              <h5>Wellness and Physical therapy.</h5>
            </div>
            <Navbar />
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pt" component={PT} />
          <Route path="/nutrition" component={Nutrition} />
          <Route path="/bios" component={Bios} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
