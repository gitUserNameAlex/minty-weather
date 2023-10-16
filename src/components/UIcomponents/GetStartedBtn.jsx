import React from 'react'
import { Link } from 'react-router-dom'

const StartBtn = () => {
  return (
		<div className='top-75vh absolute inset-0 m-auto w-60'>
			<Link
				to='/weather-info'
				className='flex justify-center rounded-xl bg-orangeRed py-4 text-xl font-normal text-white shadow-xl shadow-bgSquare/25 transition-transform duration-200 ease-in-out hover:scale-[1.02]'
				href=''
			>
				Get started
			</Link>
		</div>
	)
}

export default StartBtn
