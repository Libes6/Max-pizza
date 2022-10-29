import React from 'react'
import { useDispatch } from 'react-redux'
import {
	addItem,
	removeItem,
	clearItem,
	minusItem
} from '../../redux/cart/cartSlice'
import {
	PlusOutlined,
	MinusOutlined,
	CloseOutlined,
	DeleteOutlined
} from '@ant-design/icons'

interface CartItemProps {
	id: string
	title: string
	type: string
	size: number
	price: number
	count: number
	imageUrl: string
}

const CartItem: React.FC<CartItemProps> = ({
	id,
	imageUrl,
	title,
	price,
	count,
	size,
	type
}) => {
	const dispatch = useDispatch()
	const onClickPlus = () => {
		dispatch(
			addItem({
				id
			})
		)
	}

	const onClickMinus = () => {
		dispatch(minusItem(id))
	}

	const onClickRemove = () => {
		dispatch(removeItem(id))
	}

	const onClickClear = () => {
		dispatch(
			clearItem({
				id
			})
		)
	}

	// @ts-ignore
	return (
		<div className='cart__item'>
			<div className='cart__item-img'>
				<img
					className='pizza-block__image'
					src={imageUrl}
					alt='Pizza'
				/>
			</div>
			<div className='cart__item-info'>
				<h3>{title}</h3>
				<p>
					{type} тесто, {size} см.
				</p>
			</div>
			<div className='cart__item-count'>
				<button
					disabled={count === 1}
					onClick={() => onClickMinus()}
					className='button button--outline button--circle cart__item-count-minus'
				>
					<span>
						<PlusOutlined />
					</span>
				</button>
				<b>{count}</b>
				<div
					onClick={() => onClickPlus()}
					className='button button--outline button--circle cart__item-count-plus'
				>
					<PlusOutlined />
				</div>
			</div>
			<div className='cart__item-price'>
				<b>{price * count} ₽</b>
			</div>
			<div onClick={() => onClickRemove()} className='cart__item-remove'>
				<CloseOutlined />
			</div>
		</div>
	)
}

export default CartItem
