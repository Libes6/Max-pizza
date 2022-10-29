import logo from './pizza-logo.svg'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from '../Search/Index'
import { useDispatch, useSelector } from 'react-redux'

const Header: React.FC = () => {
	const { items, totalPrice } = useSelector((state: any) => state.cart)
	const dispatch = useDispatch()

	const locationRote = useLocation()

	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	)
	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<div className='header__logo'>
						<img width='38' src={logo} alt='' />
						<div>
							<h1>Max Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				<Search />

				{locationRote.pathname !== '/cart' && (
					<div className='header__cart'>
						<Link to='/cart' className='button button--cart'>
							<span>{totalPrice} ₽</span>
							<div className='button__delimiter'></div>

							<span>{totalCount}</span>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default Header
