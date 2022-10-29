import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'
import debounce from 'lodash.debounce'
import { setSearchValue } from '../../redux/filter/filterSlice'
import styles from './Search.module.scss'
import { AppContex } from '../../App'
import { useDispatch } from 'react-redux'

const Search = () => {
	const dispatch = useDispatch()
	const [value, SetValue] = React.useState('')
	// const {searchValue,setSearchValue} =React.useContext(AppContex);
	const inputRef = React.useRef<HTMLInputElement>(null)

	const onClickClear = () => {
		dispatch(setSearchValue(''))
		SetValue('')
		inputRef.current?.focus()
	}

	const apiDebounce = React.useCallback(
		debounce((str: string) => {
			dispatch(setSearchValue(str))
		}, 500),
		[]
	)

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		SetValue(event.target.value)
		apiDebounce(event.target.value)
	}

	return (
		<div className={styles.root}>
			<FontAwesomeIcon className={styles.icon} icon={faSearch} />
			<input
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={styles.input}
				placeholder='Найди свою вкусняху'
				type='text'
			/>
			{value && (
				<FontAwesomeIcon
					onClick={() => onClickClear()}
					className={styles.iconClear}
					icon={faClose}
				/>
			)}
		</div>
	)
}

export default Search
