import React, { useEffect, useState } from 'react'

const Timezone = () => {
    const [currTimezone, setCurrTimezone] = useState({})

    useEffect(() => {
        getTimezone()
    },[])


    const getTimezone = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            const API_KEY = '18a5bda0b862417c9aa121847231210'
          

            fetch(
							`http://api.weatherapi.com/v1/timezone.json?key=${API_KEY}&q=${latitude} ${longitude}`
						)
							.then(res => res.json())
							.then(data => setCurrTimezone(data.location.tz_id))

        })
    }


  return (
    <div className=' text-center text-white text-4xl pt-12'>
      <h1>{currTimezone.toString()}</h1>
    </div>
  )
}

export default Timezone
