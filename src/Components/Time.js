import React from 'react'
import { useEffect, useState } from 'react'

function Time() {

    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)
    })
   
  return (
    <div className='center'><p>{time}</p></div>
  )
}

export default Time