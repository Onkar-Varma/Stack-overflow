import React, {useEffect, useState} from 'react'
import axios from 'axios';


const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`
const API_key = `14b9d51f2cf849df13fb3835d466ea95`

const UserLocation = () => {

    const [respData, setRespData] = useState('');

    const getLocation= ()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        // setLat(position.coords.latitude)
        // setLong(position.coords.longitude)
        const lat = position.coords.latitude
        const long = position.coords.longitude
        // console.log(lat)
        // console.log(long)
        let finalApiEndPoint = `${API_endpoint}lat=${lat}&lon=${long}&appid=${API_key}`
        // console.log(finalApiEndPosint)
        axios.get(finalApiEndPoint).then((resp)=>{
          // console.log('resp',resp.data)
          setRespData(resp.data)
        })
      })
    }

    // useEffect(()=>{
    //     getLocation()
    // })
  return (
    <div>
    <h2>User Location</h2>
    <button className='locationBtn' onClick={getLocation}>Get User Location</button>
      <h4>City Name: <span className="location"> {respData?.name}</span></h4>
      <h4>Country Name: <span className="location">{respData?.sys?.country}</span></h4>
    </div>
  )
}

export default UserLocation