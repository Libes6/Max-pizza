import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryId: 0,
	pageCount: 1,
	searchValue: '',
	sort: {
		name: 'Популярности',
		sort: 'rating'
	}
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId: (state, action) => {
			state.categoryId = action.payload
		},
		setSort: (state, action) => {
			state.sort = action.payload
		},
		setSearchValue: (state, action) => {
			state.searchValue = action.payload
		},
		setPageCount: (state, action) => {
			state.pageCount = action.payload
		}
	}
})

export const { setCategoryId, setSort, setPageCount, setSearchValue } =
	filterSlice.actions

export default filterSlice.reducer
