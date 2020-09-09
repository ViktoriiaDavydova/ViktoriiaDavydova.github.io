import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./css/main.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="header">
            <div class="frames">
              <div> VIKTORIIA DAVYDOVA </div>
              <div style={{fontSize: "30px"}}>Front End Web Developer</div>
            </div>
          </header>
        </div>
        <div>
          {" "}
          <Navbar />
        </div>{" "}
      </div>
    );
  }
}
