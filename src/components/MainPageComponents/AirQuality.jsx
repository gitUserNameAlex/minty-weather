import React, { useEffect, useState } from 'react'
import airicon from '../../icons/airicon.png'

const AirQuality = () => {
	const [currCO, setCurrCO] = useState({})
    const [currNO2, setCurrNO2] = useState({})
    const [currO3, setCurrO3] = useState({})
    const [currSO2, setCurrSO2] = useState({})

	useEffect(() => {
		getAirQuality()
	}, [])

	const getAirQuality = () => {
		navigator.geolocation.getCurrentPosition(position => {
			const { latitude, longitude } = position.coords
			const API_KEY = '18a5bda0b862417c9aa121847231210'

			fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`)
				.then(res => res.json())
				.then(data => setCurrCO(data.current.air_quality.co))

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`)
				.then(res => res.json())
				.then(data => setCurrNO2(data.current.air_quality.no2))

        	fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`)
				.then(res => res.json())
				.then(data => setCurrO3(data.current.air_quality.o3))

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`)
				.then(res => res.json())
				.then(data => setCurrSO2(data.current.air_quality.so2))
		})
	}

	return (
		<div className=' flex items-center gap-2'>
			<div>
				<img alt='' src={airicon}/>
			</div>
			<div className=' flex gap-2 text-center text-white text-2xl pt-6'>
				<div>Air quality:</div>
				<div className=' text-left'>
					<ul>
						<li>CO: {currCO.toString()}</li>
						<li>NO2: {currNO2.toString()}</li>
						<li>O3: {currO3.toString()}</li>
						<li>SO2: {currSO2.toString()}</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default AirQuality
