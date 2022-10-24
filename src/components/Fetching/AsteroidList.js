import React, { Component } from "react";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import "./AsteroidList.css";
import { Link, Route } from "react-router-dom";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import {useNavigate} from "react-router-dom"
import {useParams} from "react-router-dom"
import axios from "axios";

export default function AsteroidList(){
  const navigate = useNavigate();
  const params= useParams();
  const [asteroids, setAsteroids]= useState([]);

  useEffect(()=>{
    const fetchAsteroids=async()=>{
      const url= `https://api.nasa.gov/neo/rest/v1/feed?start_date=${params.startDate}&end_date=${params.endDate}&api_key=dG52PPmiqxcQN4dcplLL0JjYkwmdg5iK5TZGwjXx`
      let res= await fetch(url);
      const data= await res.json();
      console.log(data.near_earth_objects)
      const asteroid_arr=[]
      Object.keys(data.near_earth_objects).forEach(function(date){
        asteroid_arr.push(data.near_earth_objects[date]);
      })
      console.log(asteroid_arr)
      setAsteroids(asteroid_arr[0])
    }
    fetchAsteroids();
  }, [])

  const navigateToAsteroid=(id, name)=>{
    console.log("clicked");
    navigate(`/asteroids/${id}/${name}`)
  }
    return (
        <div>
          <Header/>
          <div className="grid-container">


            <div className="left-side">
              <LeftSideBar  />
            </div>


            <div className="mt-5 ml-10 ">
              <button className="btn btn-info mt-2 mb-2" onClick={() => navigate(`/asteroidForm`)}>+ Fetch Asteroids</button>
              <div style={{ height: 600, width: '80%' }}>

                <div className="card-header text-white bg-info pt-2 pb-2 "><b>Asteroids</b></div>
                <div className="card-body">

                <table className="table table-striped">
                 <thead>
                   <tr>
                     <th scope="col">Name</th>
                     <th scope="col">Closest Approach Date</th>
                     <th scope="col">Action</th>

                   </tr>
                 </thead>
                 <tbody>

                 {asteroids.map(ast=>{
                   return(
                     <tr key= {ast.id}>

                       <th scope="row" key={ast.id}>{ast.name}</th>
                       <td>{ast.close_approach_data[0].close_approach_date_full}</td>
                       <button className="btn btn-info mt-2 mb-2" onClick={() => navigateToAsteroid(ast.id, ast.name)}>View asteroid</button>

                     </tr>

                   )
                 })}

                 </tbody>
                 </table>


                </div>


              </div>
            </div>


          </div>
        </div>

    );
}
