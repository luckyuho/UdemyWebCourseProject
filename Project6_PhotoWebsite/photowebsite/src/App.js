import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import "./styles/style.css";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
