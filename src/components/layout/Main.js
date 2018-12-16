import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../content/Home';
import Technical from '../content/Technical';
import Contact from '../content/Contact';
import Experience from '../content/Experience';


class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="g-main">
          <div className="g-container">
            <div className="g-wrap">
              <Navbar />
              <section className="g-content">
                <Route exact path="/" component={Home}/>
                <Route path="/technical" component={Technical}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/contact-gallery" component={Contact}/>
            </section>
            </div>
          </div>
        </main>
      </BrowserRouter>
    )
  }
}
export default Main;