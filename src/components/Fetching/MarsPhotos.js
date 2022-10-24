import React, { Component } from "react";
import Header from "./Header/Header";
import "./AsteroidList.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { Link, Route } from "react-router-dom";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import axios from "axios";

export default function MarsPhotos(){

  const [items, setItems]= useState([]);

  useEffect(()=>{
    const fetchAPOD = async () => {
      const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=dG52PPmiqxcQN4dcplLL0JjYkwmdg5iK5TZGwjXx");
      const data = await response.json();

      setItems(data.photos);
      console.log(data.photos);
    }
    fetchAPOD()
  }, []
);
    return (
        <div>
          <Header headerTitle="Photos of Mars"/>
          <div className="grid-container">


            <div className="left-side">
              <LeftSideBar  />
            </div>


            <main>
              <div className="mt-5 ml-10 ">
			         <div className=" row">

                {items.map((item, index)=>{
                  return(
                    <div className="col-lg-4 col-md-6 col-sm-6">
                  		<div className="card ml-3 mb-5" style={{cursor:"pointer",width: "17rem", height:"auto"}}>
                  		  <img  className="card-img-top" src={item.img_src}/>
                  		  <div className="card-body">
                  		    <h5 className="card-text"><span style={{color:"#7378c5"}}>Earth Date: </span>{item.earth_date}</h5>
                  		    <h6 className="card-text"><span style={{color:"#7378c5"}}>Rover Name:</span>{item.rover.name}</h6>
                  		    <h6 className="card-text"><span style={{color:"#7378c5"}}>Rover Landing Date:</span> {item.rover.landing_date}</h6>
                  		    <h6 className="card-text"><span style={{color:"#7378c5"}}>Rover Launching Date:</span>{item.rover.launch_date}</h6>
                  		  </div>
                  		</div>
                  		</div>
                  )
                })}





             </div>
             </div>
            </main>



          </div>
        </div>

    );
}
