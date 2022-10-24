import React, { Component } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import "./LeftSideBar.css";
import DashboardIcon from '@material-ui/icons/Dashboard';

class LeftSideBar extends Component {
  render() {
    return (

      <div className="left-side-bar">
        <div className="flex-container">
          <nav id="sidebar" style={{ height: '1500px' }}>
            <ul class="list-unstyled components">
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  <span><i className="fa fa-star"></i></span>
                  <label className="ml-2" style={{ fontSize: '12px' }} > APOD</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/asteroidForm" activeClassName="active">
                  <span><i class="fa fa-wpforms" aria-hidden="true"></i></span>
                  <label className="ml-2" style={{ fontSize: '12px' }} >Fetch Asteroid</label>

                </NavLink>
              </li>
              <li>
                <NavLink to="/marsPhotos" activeClassName="active">
                  <span><i class="fa fa-picture-o" aria-hidden="true"></i></span>
                  <label className="ml-2" style={{ fontSize: '12px' }} > Mars Photos</label>

                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default LeftSideBar;
