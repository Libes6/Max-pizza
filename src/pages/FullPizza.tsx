import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import PizzaDull from '../components/ContentLoader/PizzaFull'

interface PizzaState {
	imageUrl: string
	title: string
	price: number
}

const FullPizza: React.FC = () => {
	const [loading, setLoading] = React.useState(false)
	const [fullPizza, setFullPizza] = React.useState<PizzaState>({
		imageUrl: '',
		title: '',
		price: 0
	})
	const { id } = useParams()
	useEffect(() => {
		const URL = `https://629a283d6f8c03a97851d8dc.mockapi.io/pizzas/${id}`
		axios.get(URL).then((resp) => {
			setFullPizza(resp.data)
			setLoading(true)
		})
	}, [id])
	console.log(fullPizza)

	return (
		<div className='container'>
			{loading ? (
				<div className='pizza-full'>
					<img
						className='pizza-block__image'
						alt='Pizza'
						width='300'
						height='300'
						src={fullPizza.imageUrl}
					/>
					<div className='pizza-info'>
						<h2>{fullPizza.title}</h2>

						<button
							onClick={() => {}}
							className='button button--outline button--add'
						>
							{fullPizza.price} р
						</button>
					</div>
				</div>
			) : (
				<PizzaDull />
			)}
		</div>
	)
}

export default FullPizza
