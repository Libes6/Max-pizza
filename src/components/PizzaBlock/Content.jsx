import PizzaBlock from './PizzaBlock'
import Placeholder from '../ContentLoader/Placeholder'
import React from 'react'

function Content({ items }) {
	const [isLoading, setIsLoading] = React.useState(true)
	return (
		<div className='content__items'>
			{isLoading
				? [...new Array(6)].map(() => <Placeholder />)
				: items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
			{/* {items.map((item, i) => ( isLoading ? <Placeholder/> : items

        <PizzaBlock key={i} {...item} />
      ))} */}
		</div>
	)
}

export default Content
