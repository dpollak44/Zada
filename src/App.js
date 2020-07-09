import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Services from './pages/services.js';
import Therapists from './pages/therapists.js';
import Contact from './pages/contact.js';
import Service from './pages/service.js';
import Footer from './footer';
import ScrollToTop from './scrollToTop.js';


import './App.css';

function App() {
  const [selectedService, setSelectedService] = useState();
  const [infoSelectors, setInfoSelectors] = useState(
    [
      {
        id: 1, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'physical therapy', link: 'pt'
      },
      {
        id: 2, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'nutrition', link: 'nutrition'
      },
      {
        id: 3, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'children'
      },
      {
        id: 4, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'adults'
      },
      {
        id: 5, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'seniors'
      },
      {
        id: 6, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'horses'
      },
      {
        id: 7, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'dog'
      },
      {
        id: 8, url: `https://i0.wp.com/www.therapydiasf.com/wp-content/uploads/2014/01/veggiesnfruit.jpg?resize=370%2C370&ssl=1`, detailsDivDisplayed: false, name: 'swimming'
      },
      {
        id: 9, url: `https://atlanticptcenter.com/wp-content/uploads/2016/09/Lakewood_NJ_physical_therapy_2.jpg`, detailsDivDisplayed: false, name: 'cat'
      }
    ]
  );

  const detailsDivDisplay = (id, shouldDisplay) => {
    const items = infoSelectors.map(item => {
      if (item.id === id) {
        item.detailsDivDisplayed = shouldDisplay;
      }
      return item;
    });
    setInfoSelectors(items);
  };

  const selectService = id => {
    const found = infoSelectors.find(service => service.id === id);
    setSelectedService(found);
  };

  return (
    <BrowserRouter >
      <ScrollToTop />
      <>
        <header>
          <div class="flex-container">
            <div class="logo">
              <a id="anchor1" href="/">ZADA<br></br></a><a id="anchor2" href="/"><i>Rehab</i></a>
              <h5>Wellness and Physical therapy.</h5>
            </div>
            <Navbar />
          </div>
        </header>
        <div id="contentMargin">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" render={(routeProps) => (<Services {...routeProps} infoSelectors={infoSelectors} onDetailsDivDisplay={detailsDivDisplay} onSelectService={selectService} />)} />
            <Route path="/service" render={(routeProps) => (<Service {...routeProps} service={selectedService} />)} />
            <Route path="/contact" component={Contact} />
            <Route path="/therapists" component={Therapists} />
          </Switch>
        </div>
        <Footer />
      </>
    </BrowserRouter>

  );
}

export default App;
