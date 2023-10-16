import React from 'react'
import BgAnimation from './animations/BgAnimation'
import GetStartedBtnBtn from './UIcomponents/GetStartedBtn'

const Greeting = () => {
  return (
		<div className=' font-Kanit'>
			<BgAnimation />

			
			<div className='w-full absolute top-50vh'>
				<h1 className=' text-center text-5xl text-white font-normal'>
					Welcome on MintyWeather
				</h1>
			</div>

			<GetStartedBtnBtn />
		</div>
	)
}

export default Greeting
