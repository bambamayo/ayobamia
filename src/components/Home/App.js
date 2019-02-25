import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Home from "./Home";
import Nav from "../Header-footer/Nav";
import NotFound from "../NotFound";
import Footer from "../Header-footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
