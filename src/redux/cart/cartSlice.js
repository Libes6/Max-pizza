import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: []
}

// state.items.push(action.payload)

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			const findItem = state.items.find(
				(obj) => obj.id === action.payload.id
			)
			if (findItem) {
				findItem.count++
				console.log(findItem)
			} else {
				state.items.push({
					...action.payload,
					count: 1
				})
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum
			}, 0)
		},
		minusItem: (state, action) => {
			const findItem = state.items.find(
				(obj) => obj.id === action.payload
			)

			if (findItem) {
				findItem.count--
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum
			}, 0)
		},
		removeItem: (state, action) => {
			state.items = state.items.filter((obj) => obj.id !== action.payload)
		},
		clearItem: (state, action) => {
			state.items = []
			state.totalPrice = 0
		}
	}
})

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions

export default cartSlice.reducer
