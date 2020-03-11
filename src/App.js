import React, { Component } from "react";
import Nav from "./components/Nav";
import Forecast from "./pages/forecast/Forecast";
import Main from "./pages/main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body-bg">
          <Nav />
          <Switch>
            <Route path="/forecast" component={Forecast} />
            <Route path="/" exact component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
