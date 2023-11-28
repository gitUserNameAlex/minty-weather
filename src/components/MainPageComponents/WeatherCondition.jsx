import React from 'react'

const WeatherCondition = ({conditionData}) => {
	console.log(conditionData)
  return (
		<div className=' max-w-xs w-full flex items-center gap-2'>
			<div>
				{conditionData && <img alt=''src={conditionData.current.condition.icon} />}
			</div>
			{conditionData && <div>{conditionData.current.condition.text}</div>}
		</div>
	)
}

export default WeatherCondition
