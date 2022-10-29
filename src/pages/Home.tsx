import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setPageCount } from '../redux/filter/filterSlice'

import Categories from '../components/Menu/Categories'
import Sort from '../components/Menu/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Placeholder from '../components/ContentLoader/Placeholder'
import Pagination from '../components/Pagination/Index'
import { AppContex } from '../App'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
	const categoryId = useSelector((state: any) => state.filter.categoryId)
	const sort = useSelector((state: any) => state.filter.sort)
	// const counterPage = useSelector((state: any) => state.filter.pageCount)
	const { pageCount, searchValue } = useSelector((state: any) => state.filter)
	const dispatch = useDispatch()

	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const [ascSort, setAscSort] = React.useState('asc')
	// const { searchValue, setSearchValue } = React.useContext(AppContex)

	const onChangePage = (id: number) => {
		dispatch(setPageCount(id))
	}
	const onChangeCategory = (id: number) => {
		dispatch(setCategoryId(id))
	}

	React.useEffect(() => {
		setIsLoading(true)
		fetch(
			`https://629a283d6f8c03a97851d8dc.mockapi.io/pizzas?page=${pageCount}&limit=8&${
				categoryId > 0 ? `category=${categoryId}` : ''
			}&sortBy=${sort.sort}&order=${ascSort}&search=${searchValue}`
		)
			.then((res) => {
				return res.json()
			})
			.then((json) => {
				setItems(json)
				// console.log(json);
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sort, searchValue, pageCount])

	const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)

	// .filter((obj) => {
	// 	if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
	// 		return true
	// 	}
	// 	return false
	// })

	const skeletons = [new Array(6)].map((obj) => <Placeholder {...obj} />)

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onClickCategoryId={(id) => onChangeCategory(id)}
				/>
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading ? skeletons : pizzas}
			</div>
			<Pagination curent={pageCount} setCurent={onChangePage} />
		</div>
	)
}
export default Home
