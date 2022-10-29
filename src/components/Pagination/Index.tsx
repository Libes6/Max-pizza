import React from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

interface PaginationProps {
	curent: number
	setCurent: any
}
const Index: React.FC<PaginationProps> = ({ curent, setCurent }) => {
	return (
		<ReactPaginate
			className={style.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={(obj) => setCurent(obj.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel='<'
		/>
	)
}
export default Index
