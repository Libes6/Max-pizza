import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {setSort} from "../../redux/filter/filterSlice"
function Sort() {

  const dispatch = useDispatch()

  const sort =useSelector(state =>state.filter.sort)
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
  ];

  // const [select,setSelect] =React.useState(0)
  const onClickItem = (i) => {
    dispatch(setSort(i))
    setOpen(false);
  };
  // onClick={alert("Сменилось")}
  return (
    <div class="sort">
      <div class="sort__label">
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
            setOpen(!open);
          }}
        >
          {sort.name}
        </span>
      </div>
      {open && (
        <div class="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => {
                  onClickItem(obj);
                }}
                className={sort.sort === i ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
