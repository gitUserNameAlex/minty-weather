import React from 'react'
import airicon from '../../icons/airicon.png'

const AirQuality = ({airData}) => {
	return (
		<div className=' max-w-xs w-full flex items-start gap-2'>
			<div>
				<img alt='' src={airicon} />
			</div>
			<div className=' flex gap-2 text-center text-2xl pt-6'>
				<div>Air quality:</div>
				<div className=' text-left'>
					<ul>
						{airData && <li>CO: {airData.current.air_quality.co}</li>}
						{airData && <li>NO2: {airData.current.air_quality.no2}</li>}
						{airData && <li>O3: {airData.current.air_quality.o3}</li>}
						{airData && <li>SO2: {airData.current.air_quality.so2}</li>}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default AirQuality
