import React from 'react'
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
  return (
		<div className=' font-Kanit'>
			<BgAnimation />

			<Timezone />
			<DateInfo />

			<div className=' grid grid-cols-2 justify-items-center justify-center gap-16 mt-24 text-2xl'>
				<WeatherCondition />
				<Sunset />
				<Degrees />
				<Sunrise />
				<Wind />
				<AirQuality />
			</div>
		</div>
	)
}

export default MainPage
