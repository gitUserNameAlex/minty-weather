import React, { useEffect, useState } from 'react'

const DateInfo = () => {
	const [currDate, setCurrDate] = useState({})

	useEffect(() => {
		getDate()
	}, [])

	const getDate = () => {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords
			const API_KEY = '18a5bda0b862417c9aa121847231210'

			fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
			)
				.then(res => res.json())
				.then(data => setCurrDate(data.forecast.forecastday[0].date))
				.catch(e => console.log(e))
		})
	}

	return (
		<div className=' text-center text-2xl pt-6'>
			<h1>{currDate.toString()}</h1>
		</div>
	)
}

export default DateInfo
