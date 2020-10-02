import React from "react";
// import Navbar from "./components/Navbar";
// import AboutMe from "./components/AboutMe";
import "./css/main.css";


import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <div>
            <Header />
          </div>
          <Route path="/" exact component={AboutMe} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contacts" component={Contacts} />

        </HashRouter>

        <footer>
          <p className="footer">Designed by Viktoriia Davydova © 2020</p>
        </footer>
      </div>
    );
  }
}
