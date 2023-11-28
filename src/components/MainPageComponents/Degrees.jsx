import React from 'react'
import tempicon from '../../icons/tempicon.png'

const Degrees = ({degreesData}) => {
	return (
		<div className=' max-w-xs w-full flex gap-2'>
			<div>
				<img alt='' src={tempicon} />
			</div>
			<div className='flex flex-col'>
				{degreesData && (
					<h2>Temperature: {degreesData.current.temp_c} °C</h2>
				)}
				{degreesData && (
					<h2>Feels like: {degreesData.current.feelslike_c} °C</h2>
				)}
			</div>
		</div>
	)
}
export default Degrees
