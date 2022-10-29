import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cartImg from '../assets/img/empty-cart.png'
import { clearItem } from '../redux/cart/cartSlice'
import CartItem from '../components/Cart/CartItem'
import { DeleteOutlined } from '@ant-design/icons'
const Cart: React.FC = () => {
	const { items, totalPrice } = useSelector((state: any) => state.cart)
	const totalCount = items.reduce(
		(sum: number, item: any) => sum + item.count,
		0
	)
	const dispatch = useDispatch()

	// console.log(items)

	return (
		<div className='container container--cart'>
			{items.length ? (
				<div className='cart'>
					<div className='cart__top'>
						<h2 className='content__title'>Корзина</h2>
						<div
							onClick={() => dispatch(clearItem(''))}
							className='cart__clear'
						>
							<DeleteOutlined />
							<span>Очистить корзину</span>
						</div>
					</div>
					<div className='content__items'>
						{items.map((item: any) => (
							<CartItem key={item.id} {...item} />
						))}
					</div>
					<div className='cart__bottom'>
						<div className='cart__bottom-details'>
							<span>
								Всего пицц: <b>{totalCount}</b>
							</span>
							<span>
								Сумма заказа: <b>{totalPrice}</b>
							</span>
						</div>
						<div className='cart__bottom-buttons'>
							<a
								href='/'
								className='button button--outline button--add go-back-btn'
							>
								<Link to='/'>
									<span>Вернуться назад</span>
								</Link>
							</a>
							<button className='button pay-btn'>
								<span>Оплатить сейчас</span>
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className='cart cart--empty'>
					<h2>
						Корзина пустая <i>😕</i>
					</h2>
					<p>
						Вероятней всего, вы не заказывали ещё пиццу.
						<br />
						Для того, чтобы заказать пиццу, перейди на главную
						страницу.
					</p>
					<img src={cartImg} alt='Empty cart' />
					<Link to='/' className='button button--black'>
						<span> Вернуться на главную</span>
					</Link>
				</div>
			)}
		</div>
	)
}
export default Cart
