import React from "react";

import Categories from "../components/Categories";
import Content from "../components/Content";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Placeholder from "../components/Placeholder";

 const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://629a283d6f8c03a97851d8dc.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [new Array(6)].map(() => <Placeholder />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
export default Home;