import React, { useEffect, useState } from 'react'
import tempicon from '../../icons/tempicon.png'

const Degrees = () => {
	const [currDegrees, setCurrDegrees] = useState({})
	const [currFeels, setCurrFeels] = useState({})

	useEffect(() => {
		getDegrees()
	}, [])

	const getDegrees = () => {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords
			const API_KEY = '18a5bda0b862417c9aa121847231210'

			fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
			)
				.then(res => res.json())
				.then(data => setCurrDegrees(data.current.temp_c))

			fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
			)
				.then(res => res.json())
				.then(data => setCurrFeels(data.current.feelslike_c))
		})
	}

	return (
		<div className=' flex'>
			<div>
				<img alt='' src={tempicon} />
			</div>
			<div className='flex flex-col'>
				<h2>Temperature: {currDegrees.toString()} °C</h2>
				<h2>Feels like: {currFeels.toString()} °C</h2>
			</div>
		</div>
	)
}
export default Degrees
