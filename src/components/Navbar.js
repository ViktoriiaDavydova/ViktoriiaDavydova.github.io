import React, { Component } from "react";


class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="tab button ">
            <button
              onClick={() => {
                this.props.onChangePage("aboutMe");
              }}
            >
              About me
              <img 
                style={{ flex: 1, width: "auto", height: "auto" }}
                src={require("../images/myQuestion.png")}
                resizeMode="contain"
              />
            </button>
          </div>
          <div className="tab button">
            <button
              onClick={() => {
                this.props.onChangePage("projects");
              }}
            >
              Projects
              <img src={require("../images/myBulb.png")} />
            </button>
          </div>
          <div className="tab button">
            <button
              onClick={() => {
                this.props.onChangePage("resume");
              }}
            >
              Resume
              <img src={require("../images/myChest.png")} />
            </button>
          </div>
          <div className="tab button">
            <button
              onClick={() => {
                this.props.onChangePage("contacts");
              }}
            >
              Contacts
              <img src={require("../images/myGo.png")} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
