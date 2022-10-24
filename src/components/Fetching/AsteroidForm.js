import { useState, useEffect } from "react";
import Header from "./Header/Header";
import "./AsteroidList.css";
import {useNavigate} from "react-router-dom"
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Axios from "axios";

export default function AsteroidForm() {
  const navigate= useNavigate();
  const [startDate, setStartDate]= useState("");
  const [endDate, setEndDate]= useState("")
   const navigateToList=e=>{
     e.preventDefault();
     navigate(`/asteroids/${startDate}/${endDate}`);
   }
  return(

    <div>

      <Header headerTitle="Get Asteroids"/>


      <div className="grid-container">


        <div className="left-side">
          <LeftSideBar/>
        </div>

        <div className="mt-5 ml-10 ">

          <div style={{ height: 600, width: '80%' }}>
            <div className="card-header text-white bg-info pt-2 pb-2 "><b>Fetch Asteroid</b></div>
             <div className="card-body">

             <form>

             <div class="form-group">
                <label for="exampleInputEmail1">Start Date</label>
                <input
                type="date"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Start Date"
                value={startDate}
                onChange= {(event) => setStartDate(  event.target.value )}
                />
             </div>

             <div class="form-group">
                <label for="exampleInputEmail1">End Date(must be within 7 days of start date)</label>
                <input
                type="date"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter a date within 7 days of start date"
                value={endDate}
                onChange= {(event) => setEndDate(  event.target.value )}
                />
             </div>

                <button onClick={navigateToList} type="submit" class="btn btn-info">Query Asteroids</button>
            </form>





               </div>

             </div>


        </div>
    </div>
  </div>


  );
}
