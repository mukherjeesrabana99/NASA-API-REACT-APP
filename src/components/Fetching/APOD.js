import React, { Component } from "react";
import Header from "./Header/Header";
import "./AsteroidList.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { Link, Route } from "react-router-dom";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import axios from "axios";

export default function APOD(){

  const [picture, setPicture]= useState("");

  useEffect(()=>{
    const fetchAPOD = async () => {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=dG52PPmiqxcQN4dcplLL0JjYkwmdg5iK5TZGwjXx");
      const data = await response.json();
      setPicture(data);
      console.log(data);
    }
    fetchAPOD()
  }, []
);
    return (
        <div>
          <Header/>
          <div className="grid-container">


            <div className="left-side">
              <LeftSideBar  />
            </div>



            <div className="mt-5 ml-10 ">

              <div style={{ height: 600, width: '80%' }}>

              <div className="card" style={{width: "18rem"}}>
                <div className="card-header text-white bg-info pt-2 pb-2 "><b>User List</b></div>
                <img className="card-img-top" src="{picture.hdurl}" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>




              </div>

            </div>



          </div>
        </div>

    );
}
