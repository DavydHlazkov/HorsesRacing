import React from "react";
import { useSelector } from "react-redux";
import "./Track.css"
import horsePicture from './h1.gif'

export default function RaceTrack() {
  const horses = useSelector((state) => state.horses.horses);
  return (
    <div className="track-container">
      <ul>
        {horses?.map((horse, index) => (
          <li  key={index} className ={horse.distance ===1000 ? "winner" : "lane"}>
            {horse.distance ===1000 ? <span id="name-win">{horse.name} - WIN!</span>:<span>{horse.name} : {1000 - horse.distance} meters left</span> }
            {horse.distance !== 0 && horse.distance !== 1000 ? <img style={{ position : "fixed", left:  horse.distance * 0.08  + "vw" }} 
            className='horse-img' src={horsePicture}></img> : null} 
          </li>
        ))}
      </ul>
    </div>
  );
}
