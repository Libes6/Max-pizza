import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.scss";
import {AppContex} from "../../App"

const Search = () => {
const {searchValue,setSearchValue} =React.useContext(AppContex)
  return (
    
    <div className={styles.root}>
      <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      <input
      value={searchValue}
        onChange={(event) =>{ setSearchValue(event.target.value)}}
        className={styles.input}
        placeholder="Найди свою вкусняху"
        type="text"
      />
     {searchValue && (<FontAwesomeIcon onClick={()=>setSearchValue("")} className={styles.iconClear} icon={faClose} />)}
    </div>
  );
 
};

export default Search;
