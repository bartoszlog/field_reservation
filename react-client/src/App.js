import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layouts/Header";
import FieldList from "./components/fields/FieldList";
import Field from "./components/fields/Field";
import FieldDetails from "./components/fields/FieldDetails";
import About from "./components/pages/About";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={FieldList} />
              <Route exact path="/fields/:id" component={FieldDetails} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
