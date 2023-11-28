import React from 'react'
import sunseticon from '../../icons/sunseticon.png'

const Sunset = ({ sunsetData }) => {
	return (
		<div className=' max-w-xs w-full flex gap-2'>
			<div>
				<img alt='' src={sunseticon} />
			</div>
			<div className=' text-center text-2xl pt-6'>
				{sunsetData && (<h2>Sunset: {sunsetData.forecast.forecastday[0].astro.sunset}</h2>)}
			</div>
		</div>
	)
}

export default Sunset
