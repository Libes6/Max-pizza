import React from "react";

import Categories from "../components/Menu/Categories";
import Sort from "../components/Menu/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Placeholder from "../components/PizzaBlock/Placeholder";
import Pagination from "../components/Pagination/Index"
import {AppContex} from "../App"

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [ascSort, setAscSort] = React.useState("asc");
  const [curent, setCurent] = React.useState(1);
  const {searchValue,setSearchValue} =React.useContext(AppContex)

  const [sort, setSort] = React.useState({
    name: "Популярности",
    sort: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://629a283d6f8c03a97851d8dc.mockapi.io/pizzas?page=${curent}&limit=5&${categoryId > 0 ? `category=${categoryId}` : ""}&sortBy=${sort.sort}&order=${ascSort}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        console.log(json);
        setIsLoading(false);
      });
      window.scrollTo(0,0);
  }, [categoryId, sort,searchValue,curent ]);

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
          onClickCategoryId={(id) => setCategoryId(id)}
        />
        <Sort
          value={sort}
          setSort={(id) => setSort(id)}
          asc={ascSort}
          setAscSort={() => setAscSort("desc")}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination curent={curent} setCurent={setCurent}/>
    </div>
  );
};
export default Home;
