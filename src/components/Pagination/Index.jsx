import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";

const Index = () => {
  const [curent, setCurent] = React.useState(0);
  const onChange = (page) => {
    console.log(page);
    setCurent(page);
  };

  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={console.log("1")}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
export default Index;
