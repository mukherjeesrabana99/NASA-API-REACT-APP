import React, { Component } from "react";
import { Routes,Route } from "react-router-dom";

import AsteroidList from "./components/Fetching/AsteroidList";
import APOD from "./components/Fetching/APOD";
import AsteroidForm from "./components/Fetching/AsteroidForm"
import AsteroidDetail from "./components/Fetching/AsteroidDetail";
import MarsPhotos from "./components/Fetching/MarsPhotos";
class Main extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<APOD/>} exact />
          <Route path="/asteroidForm" element={<AsteroidForm/>} exact />
          <Route path="/asteroids/:startDate/:endDate" element={<AsteroidList/>} exact />
          <Route path="/asteroids/:id/:name" element={<AsteroidDetail/>} exact/>;
          <Route path="/marsPhotos" element= {<MarsPhotos/>} exact/>

        </Routes>

      </div>
    );
  }
}
export default Main;
