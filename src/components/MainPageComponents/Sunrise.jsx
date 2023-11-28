import React from 'react'
import sunriseicon from '../../icons/sunriseicon.png'

const Sunrise = ({sunriseData}) => {
	return (
		<div className=' max-w-xs w-full flex gap-2'>
			<div>
				<img alt='' src={sunriseicon} />
			</div>
			<div className=' text-center text-2xl pt-6'>
				{sunriseData && <h2>Sunrise: {sunriseData.forecast.forecastday[0].astro.sunrise}</h2>}
			</div>
		</div>
	)
}

export default Sunrise
