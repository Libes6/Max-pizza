import React from "react";

function Categories({value, onClickCategoryId}) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  // const [active, setActive] = React.useState(0);

  // const onClickCategory = (index) => {
  //   setActive(index);
  // };
  return (
    <div class="categories">
      <ul>
        
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategoryId(i)}
             className={value == i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;