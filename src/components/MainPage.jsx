import React, { useEffect, useState } from 'react'
import BgAnimation from './animations/BgAnimation'
import Timezone from './MainPageComponents/Timezone'
import DateInfo from './MainPageComponents/DateInfo'
import WeatherCondition from './MainPageComponents/WeatherCondition'
import Degrees from './MainPageComponents/Degrees'
import Wind from './MainPageComponents/Wind'
import Sunrise from './MainPageComponents/Sunrise'
import Sunset from './MainPageComponents/Sunset'
import AirQuality from './MainPageComponents/AirQuality'
  
const MainPage = () => {
	const [weatherData, setWeatherData] = useState(null)

	useEffect(() => {
		getWeatherData();
	}, [])

const getWeatherData = () => {
	navigator.geolocation.getCurrentPosition(position => {
		const { latitude, longitude } = position.coords
		const API_KEY = '18a5bda0b862417c9aa121847231210'

		fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude} ${longitude}&days=1&aqi=yes&alerts=no`
		)
			.then(res => res.json())
			.then((data) => setWeatherData(data))
			.catch(error => {
				console.error('Ошибка получения данных о погоде:', error)
			})

	})
}

  return (
		<div className=' font-Kanit'>
			<BgAnimation />

			<Timezone timezoneData={weatherData}/>
			<DateInfo dateInfoData={weatherData} />

			<div className=' grid grid-cols-2 justify-items-center justify-center gap-16 mt-24 text-2xl'>
				<WeatherCondition conditionData={weatherData}/>
				<Sunset sunsetData={weatherData}/>
				<Degrees degreesData={weatherData}/>
				<Sunrise sunriseData={weatherData}/>
				<Wind windData = {weatherData}/>
				<AirQuality airData={weatherData}/>
			</div>
		</div>
	)
}

export default MainPage
