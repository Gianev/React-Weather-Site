import React from 'react'
import "./styles.css"

function Info(props) {
  return (
    <div className='card'>
        <p>Temperature {props.temp} C</p>
        <p>Feels like {props.feels} C</p>
        <p>Windspeed {props.wind} km/h</p>
        <p>Humidity is {props.humidity}</p>
        <p>Conditions {props.sky}</p>
        
        
    </div>
  )
}

export default Info