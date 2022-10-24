import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  render() {

    return (
      <div className="header">
        <div className="headerContainer">
          <div className="left-side-header">

          </div>
          <div className="center-area-header">
            <section style={{ float: 'right' }}>
              <b className="mr-3" style={{ color: 'white' }}><i style={{ 'font-size': '3rem' }} className="mt-3 fa fa-user fa-fw"></i> PROJECT</b>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
