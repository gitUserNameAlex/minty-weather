import React, { useEffect, useState } from 'react'
import sunseticon from '../../icons/sunseticon.png'

const Sunset = () => {
	const [currSunset, setCurrSunset] = useState({})

	useEffect(() => {
		getSunset()
	}, [])

	const getSunset = () => {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords
			const API_KEY = '18a5bda0b862417c9aa121847231210'

			fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
			)
				.then(res => res.json())
				.then(data => setCurrSunset(data.forecast.forecastday[0].astro.sunset))
				.catch(e => console.log(e))
		})
	}

	return (
		<div className=' max-w-xs w-full flex gap-2'>
			<div>
				<img alt='' src={sunseticon} />
			</div>
			<div className=' text-center text-2xl pt-6'>
				<h1>Sunset: {currSunset.toString()}</h1>
			</div>
		</div>
	)
}

export default Sunset
