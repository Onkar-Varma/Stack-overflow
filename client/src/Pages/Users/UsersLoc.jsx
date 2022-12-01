import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const API_endpoint = 'https://api.openweathermap.org/geo/1.0/reverse?';
const API_key = '14b9d51f2cf849df13fb3835d466ea95';
const UsersLoc = () => {
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [ data, setData] = useState('')
    
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })
        const url = `${API_endpoint}lat=${lat}&lon=${long}&appid=${API_key}`
        axios.get(url).then((resp)=>{
            console.log(resp.data)
            console.log(resp.data[{...setData.name}])
        })
    })
    
    // const getLocations = ()=>{
    //     navigator.geolocation.getCurrentPosition((postion)=>{
    //         const lat = postion.coords.latitude
    //         const long = postion.coords.longitude

    //         axios.get(url).then((resp)=>{
    //             console.log(resp.data)
    //             setData(resp.data)
    //         })

    //     })
    // }
  return (
    <div>
      <h2>User Location</h2>
      <button className="locationBtn">Get User Location</button>
      <h4>
        City Name: <span className="location">{console.log(data?.name)}</span>
      </h4>
      <h4>
        Country Name: <span className="location"></span>
      </h4>
    </div>
  );
};

export default UsersLoc;

// https://api.openweathermap.org/geo/1.0/reverse?lat=19.0309774&lon=72.8594289&appid=14b9d51f2cf849df13fb3835d466ea95
