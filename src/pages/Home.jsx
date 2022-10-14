import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {setCategoryId, setPageCount} from "../redux/filter/filterSlice"

import Categories from "../components/Menu/Categories";
import Sort from "../components/Menu/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Placeholder from "../components/PizzaBlock/Placeholder";
import Pagination from "../components/Pagination/Index";
import { AppContex } from "../App";

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort);
  const counterPage = useSelector((state)=>state.filter.pageCount)
  const dispatch = useDispatch();

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [ascSort, setAscSort] = React.useState("asc");
  const { searchValue, setSearchValue } = React.useContext(AppContex);

  const onChangePage =(id)=>{
    dispatch(setPageCount(id))
  }
  const onChangeCategory =(id)=>{
    dispatch(setCategoryId(id))
  }

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://629a283d6f8c03a97851d8dc.mockapi.io/pizzas?page=${counterPage}&limit=8&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sort.sort}&order=${ascSort}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        // console.log(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, counterPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [new Array(6)].map(() => <Placeholder />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategoryId={(id) => onChangeCategory(id)}
        />
        <Sort
          value={sort}
          // setSort={(id) => setSort(id)}
          asc={ascSort}
          setAscSort={() => setAscSort("desc")}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination curent={counterPage} setCurent={onChangePage} />
    </div>
  );
};
export default Home;
