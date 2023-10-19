//maybe optimize fetching

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GreetingPage from './components/GreetingPage'
import MainPage from './components/MainPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<GreetingPage />} />
				<Route path='/weather-info' element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
