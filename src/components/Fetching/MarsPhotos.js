import React, { Component } from "react";
import Header from "./Header/Header";
import "./AsteroidList.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { Link, Route } from "react-router-dom";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import axios from "axios";

export default function MarsPhotos(){

  const [items, setItems]= useState("");

  useEffect(()=>{
    const fetchAPOD = async () => {
      const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=dG52PPmiqxcQN4dcplLL0JjYkwmdg5iK5TZGwjXx");
      const data = await response.json();
      const arr= [data.photos]
      setItems(arr);
      console.log(arr);
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


                {items.map((item, i)=>{
                  return(
                    <div className= "col-lg-3 col-md-6 col-sm-6">
                      <div className="card" style={{cursor:"pointer", width:"17rem", height:"auto"}}>
                        <img  className="card-img-top" src="{item.img_src}" />
                      </div>
                    </div>
                  )
                })}




             </div>
            </main>



          </div>
        </div>

    );
}
