import React, { Component } from "react";
import Header from "./Header/Header";
import "./AsteroidList.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import { Link, Route } from "react-router-dom";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import axios from "axios";

export default function AsteroidDetail(){
  const params= useParams();
  const [item, setItem]= useState("");

  useEffect(()=>{
    const fetchAPOD = async () => {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${params.id}?api_key=dG52PPmiqxcQN4dcplLL0JjYkwmdg5iK5TZGwjXx`);
      const data = await response.json();
      setItem(data);
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


            <main>
			         <div className="feedContainer row">
                <div className="mt-5 ml-10 ">



                  <div className="card mr-5" style={{width: "50rem", height:"18rem"}}>
                    <div className="card-header text-white bg-info pt-2 pb-2 "><b>{item.name}</b></div>
                    <div class="card-body">

            	       <b style={{display:"block"}} className="card-title"><span style={{color:"#7378c5"}}>Designation: </span>{item.designation}</b>

            	        <b style={{display:"block"}} className="card-title"><span style={{color:"#7378c5"}}>Magnitude: </span>{item.absolute_magnitude_h}</b>
            	         <b style={{display:"block"}} className="card-title"><span style={{color:"#7378c5"}}>Dangerous?</span>{item.dangerous?"YES":"NO"}</b>

            	     </div>
                 </div>

               </div>
              </div>
            </main>



          </div>
        </div>

    );
}
