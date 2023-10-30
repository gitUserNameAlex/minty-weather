import React, { useEffect, useState } from 'react'
import sunriseicon from '../../icons/sunriseicon.png'

const Sunrise = () => {
	const [currSunrise, setCurrSunrise] = useState({})

	useEffect(() => {
		getSunrise()
	}, [])

	const getSunrise = () => {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords
			const API_KEY = '18a5bda0b862417c9aa121847231210'

			fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
			)
				.then(res => res.json())
				.then(data =>
					setCurrSunrise(data.forecast.forecastday[0].astro.sunrise)
				)
				.catch(e => console.log(e))
		})
	}

	return (
		<div className=' max-w-xs w-full flex gap-2'>
			<div>
				<img alt='' src={sunriseicon} />
			</div>
			<div className=' text-center text-2xl pt-6'>
				<h1>Sunrise: {currSunrise.toString()}</h1>
			</div>
		</div>
	)
}

export default Sunrise
