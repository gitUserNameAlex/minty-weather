import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import GreetingPage from './components/GreetingPage'
import MainPage from './components/MainPage'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path='*' element={<GreetingPage />} />
					<Route path='/weather-info' element={<MainPage />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
