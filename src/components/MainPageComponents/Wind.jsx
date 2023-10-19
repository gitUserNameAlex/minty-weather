import React, { useEffect, useState } from 'react'
import windicon from '../../icons/windicon.png'

const Wind = () => {
	const [currSpeed, setCurrSpeed] = useState({})
	const [currDirection, setCurrDirection] = useState({})

	useEffect(() => {
		getWind()
	}, [])

	const getWind = () => {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords
			const API_KEY = '18a5bda0b862417c9aa121847231210'

			fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
			)
				.then(res => res.json())
				.then(data => setCurrSpeed(data.current.wind_kph))

			fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
			)
				.then(res => res.json())
				.then(data => setCurrDirection(data.current.wind_dir))
		})
	}

	return (
		<div className=' max-w-xs w-full flex gap-2'>
			<div>
					<img alt='' src={windicon} />
			</div>
			<div className=' flex flex-col'>
				<h2>Wind speed: {currSpeed.toString()}kph</h2>
				<h2>Wind direction: {currDirection.toString()}</h2>
			</div>
		</div>
	)
}

export default Wind
