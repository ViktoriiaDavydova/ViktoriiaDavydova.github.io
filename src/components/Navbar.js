import React, { Component } from "react";


class Navbar extends Component {
  render() {
    return (
      <div className="d-flex flex-row  " >
        <div className="tab button " >
          <button 
            onClick={() => {
              this.props.onChangePage("aboutMe");
            }}
          >
            About me
            <img src={require('../images/myQuestion.png')} />
          </button>
        </div>
        <div className="tab button">
          <button
            onClick={() => {
              this.props.onChangePage("projects");
            }}
          >
            Projects
            <img src={require('../images/myBulb.png')} />
          </button>
        </div>
        <div className="tab button">
          <button
            onClick={() => {
              this.props.onChangePage("Resume");
            }}
          >
            Resume
            <img src={require('../images/myChest.png')} />
          </button>
        </div>
        <div className="tab button">
          <button
            onClick={() => {
              this.props.onChangePage("Contacts");
            }}
          >
            Contacts
            <img src={require('../images/myGo.png')} />
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
