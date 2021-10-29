import { Home } from "@material-ui/icons";
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";

const Navbar = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route>
          <Link to="about">About</Link>
          <Link to="contact">Contact Us</Link>
          {/* <Link to='pricing'>Pricing</Link> */}
        </Route>
      </Switch>

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </Router>
  );
};

export default Navbar;
