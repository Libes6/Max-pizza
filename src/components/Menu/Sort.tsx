import { includes } from 'lodash'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../../redux/filter/filterSlice'

interface ListSort {
	name: string
	sort: string
}

const Sort: React.FC = () => {
	const dispatch = useDispatch()

	const sort = useSelector((state: any) => state.filter.sort)
	const [open, setOpen] = React.useState(false)

	const list: ListSort[] = [
		{ name: 'популярности', sort: 'rating' },
		{ name: 'цене', sort: 'price' },
		{ name: 'алфавиту', sort: 'title' }
	]

	const sortRef = React.useRef<HTMLDivElement>(null)

	const onClickItem = (i: ListSort) => {
		dispatch(setSort(i))
		setOpen(false)
	}

	React.useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (!event.path.includes(sortRef.current)) {
			}
		}
		document.body.addEventListener('click', handleClickOutside)

		return () => {
			document.body.removeEventListener('click', handleClickOutside)
		}
	}, [])
	return (
		<div ref={sortRef} className='sort'>
			<div className='sort__label'>
				<span
					onClick={() => {
						// setAscSort("desc");
					}}
				>
					^
				</span>
				<b>Сортировка по :</b>
				<span
					onClick={() => {
						setOpen(!open)
					}}
				>
					{sort.name}
				</span>
			</div>
			{open && (
				<div className='sort__popup'>
					<ul>
						{list.map((obj, i) => (
							<li
								key={i}
								onClick={() => {
									onClickItem(obj)
								}}
								className={sort.sort === i ? 'active' : ''}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort
