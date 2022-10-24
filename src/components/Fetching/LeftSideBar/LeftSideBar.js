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
                <NavLink to="/" activeClassName="active" exaact>

                  <label className="ml-4" > APOD</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/asteroidList" activeClassName="active">
                  <span><i className="fa fa-bar-chart" style={{ fontSize: '20px' }}></i></span>
                  <label className="ml-4" >Asteroid List</label>

                </NavLink>
              </li>
              <li>
                <NavLink to="/marsPhotos" activeClassName="active">
                  <span><i className="fa fa-bar-chart" style={{ fontSize: '20px' }}></i></span>
                  <label className="ml-4" > Mars Photos</label>

                </NavLink>
              </li>
              <li>
                <NavLink to="/asteroidForm" activeClassName="active">
                  <span><i className="fa fa-tasks" style={{ fontSize: '20px' }}></i> </span>
                  <label className="ml-4" > Fetch Asteroid</label>
                </NavLink>
              </li>
              <li>
                <NavLink to="/myprofile" activeClassName="active">
                  <span><i style={{ 'font-size': '25px' }} className="fa fa-user"></i></span>
                  <label className="ml-4" > Option 4</label>
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
