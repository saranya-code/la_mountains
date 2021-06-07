import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./style.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import History from "./components/History";
import Teams from "./components/Teams";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/history" component={() => <History />} />

      <Route
        exact
        path="/teams/Mountain1"
        component={(props) => <Teams {...props} />}
      />

      <Route
        exact
        path="/teams/Mountain2"
        component={(props) => <Teams {...props} />}
      />
    </Router>
  );
}

export default App;
