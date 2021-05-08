import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";

function App() {
  document.title = "Router Example";

  return (
    <Router>
      <Navigation />     
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
