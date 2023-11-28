import React from 'react'

const DateInfo = ({ dateInfoData }) => {
	return (
		<div className=' text-center text-2xl pt-6'>
			{dateInfoData && <h1>{dateInfoData.current.last_updated}</h1>}
		</div>
	)
}

export default DateInfo
