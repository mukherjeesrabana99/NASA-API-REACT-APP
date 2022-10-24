import React, { Component } from "react";
import Header from "./Header/Header";
import "./AsteroidList.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { Link, Route } from "react-router-dom";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import axios from "axios";

export default function APOD(){

  const [item, setItem]= useState("");

  useEffect(()=>{
    const fetchAPOD = async () => {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=dG52PPmiqxcQN4dcplLL0JjYkwmdg5iK5TZGwjXx");
      const data = await response.json();
      setItem(data);
      console.log(data);
    }
    fetchAPOD()
  }, []
);
    return (
        <div>
          <Header width="1000px" headerTitle="Picture of the day"/>
          <div className="grid-container">


            <div className="left-side">
              <LeftSideBar  />
            </div>



            <main>
			         <div className="feedContainer row">
                <div className="mt-5 ml-10 ">



                <div className="card" style={{cursor:"pointer",width: "30rem", height:"20"}}>
                  <img  className="card-img-top" src={item.hdurl} />
                  <div className="card-body">
                    <b style={{display:"block"}} className="card-title">{item.title}</b>
                    <p style={{display:"block"}} className="card-title">{item.explanation}</p>

                  </div>
                </div>

               </div>
              </div>
            </main>




          </div>
        </div>

    );
}
