import React from 'react'

const Timezone = ({timezoneData}) => {
  return (
		<div className=' text-center text-4xl pt-12'>
			{timezoneData && <h1>{timezoneData.location.tz_id}</h1>}
		</div>
	)
}

export default Timezone
