import Loadable from 'react-loadable'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './scss/app.scss'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import FullPizza from './pages/FullPizza'
import Layout from './layouts/Layout'

export const AppContex = React.createContext('defaultValue')

const App: React.FC = () => {
	const count = useSelector((state: any) => state.filter.value)
	const dispatch = useDispatch()
	const [searchValue, setSearchValue] = React.useState('')

	// @ts-ignore
	// @ts-ignore
	return (
		// <AppContex.Provider value={{ searchValue, setSearchValue }}>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='pizza/:id' element={<FullPizza />} />
			</Route>

			<Route path='*' element={<NotFound />} />
		</Routes>
		// </AppContex.Provider>
	)
}

export default App
