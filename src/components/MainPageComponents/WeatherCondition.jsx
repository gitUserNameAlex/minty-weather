import React, { useEffect, useState } from 'react'

const WeatherCondition = () => {
    const [currWeather, setCurrWeather] = useState({})
    const [currIcon, setCurrIcon] = useState({})
    

		useEffect(() => {
			getWeather()
		}, [])

		const getWeather = () => {
			navigator.geolocation.getCurrentPosition(position => {
				const { latitude, longitude } = position.coords
				const API_KEY = '18a5bda0b862417c9aa121847231210'

				fetch(
					`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
				)
					.then(res => res.json())
					.then(data => setCurrWeather(data.current.condition.text))

                fetch(
					`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
				)
					.then(res => res.json())
					.then(data => setCurrIcon(data.current.condition.icon))
			})
		}


  return (
		<div className=' flex justify-between items-center gap-2'>
			<div><img alt='' src={currIcon} /></div>
			<div>{currWeather.toString()}</div>
		</div>
	)
}

export default WeatherCondition
