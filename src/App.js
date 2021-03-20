import React from "react";
import "./css/styles.css";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router >
          <Sidebar />
          <Switch >
            <Route path="/" exact component={AboutMe}  />
            <Route path="/Projects" component={Projects} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Contacts" component={Contacts} />
          </Switch>
        </Router>
        
      </div>
    );
  }
}
