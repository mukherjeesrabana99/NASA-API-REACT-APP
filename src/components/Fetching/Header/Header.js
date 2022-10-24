import React, { Component } from "react";

import "./Header.css";

class Header extends Component {

  render() {

    return (
      <div className="header bg-info text-white" style={{width:"1345px"}}>
        <div className="headerContainer" >
          <div className="left-side-header">

          </div>
          <div className="center-area-header" style={{width:"500px"}}>
            <section style={{ float: 'right' }}>
              <b className="ml-3 mt-3" style={{ color: 'white', fontSize: '3rem' }}>{this.props.headerTitle}</b>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
