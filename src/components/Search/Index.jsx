import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faClose } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";



import styles from "./Search.module.scss";
import {AppContex} from "../../App"


const Search = () => {


const [value, SetValue] =React.useState('')
const {searchValue,setSearchValue} =React.useContext(AppContex);
const  inputRef = React.useRef()


const onClickClear=()=>{
  setSearchValue('');
  SetValue('')
  inputRef.current?.focus();
}

const apiDebounce = React.useCallback(
  debounce((str)=>{
   setSearchValue(str)
  },500),
  [],
   );


const onChangeInput = (event) =>{
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
        placeholder="Найди свою вкусняху"
        type="text"
      />
     {value && (<FontAwesomeIcon onClick={()=> onClickClear()} className={styles.iconClear} icon={faClose} />)}
    </div>
  );
 
};

export default Search;
