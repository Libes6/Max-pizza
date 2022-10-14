import { includes } from "lodash";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/filter/filterSlice";
function Sort() {
  const dispatch = useDispatch();

  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
  ];

  const sortRef = React.useRef();

  const onClickItem = (i) => {
    dispatch(setSort(i));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        console.log("first");
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={sortRef} class="sort">
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
