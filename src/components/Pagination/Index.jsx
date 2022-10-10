import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";

const Index = ({curent,setCurent}) => {

  const onChange = (page) => {
    // console.log(page);
    setCurent(page);
  };

  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(obj)=>setCurent(obj.selected +1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
export default Index;
