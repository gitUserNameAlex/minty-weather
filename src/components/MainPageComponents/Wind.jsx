import React from 'react'
import windicon from '../../icons/windicon.png'

const Wind = ({windData}) => {
	return (
		<div className=' max-w-xs w-full flex gap-2'>
			<div>
				<img alt='' src={windicon} />
			</div>
			<div className=' flex flex-col'>
				{windData && (<h2>Wind speed: {windData.current.wind_kph} kph</h2>)}
				{windData && (<h2>Wind direction: {windData.current.wind_dir}</h2>
				)}
			</div>
		</div>
	)
}

export default Wind
