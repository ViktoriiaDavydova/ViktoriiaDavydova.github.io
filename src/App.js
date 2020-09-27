import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import "./css/main.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="header">
            <div className="frames">
              <div style={{ fontSize: "35px" }}> VIKTORIIA DAVYDOVA </div>
              <div style={{ fontSize: "30px" }}>Front End Web Developer</div>
            </div>
          </header>
        </div>
        <div>
          <Navbar />
        </div>
        <div >
          <AboutMe />
        </div>
        <footer>
          <p className="footer">Designed by Viktoriia Davydova © 2020</p>
        </footer>
      </div>
    );
  }
}
