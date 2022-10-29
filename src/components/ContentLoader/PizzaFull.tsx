import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaDull = () => {
	return (
		<div>
			<ContentLoader
				speed={2}
				width={1200}
				height={600}
				viewBox='0 0 1200 600'
				backgroundColor='#f3f3f3'
				foregroundColor='#ecebeb'
			>
				<circle cx='298' cy='259' r='191' />
				<rect x='507' y='92' rx='0' ry='0' width='676' height='66' />
				<rect x='509' y='169' rx='0' ry='0' width='676' height='66' />
				<rect x='509' y='253' rx='0' ry='0' width='676' height='66' />
				<rect x='511' y='339' rx='0' ry='0' width='676' height='66' />
			</ContentLoader>
		</div>
	)
}

export default PizzaDull
