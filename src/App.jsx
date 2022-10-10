import Loadable from "react-loadable";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/filter/filterSlice";

import "./scss/app.scss";
import Header from "./components/Menu/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const AppContex = React.createContext("defaultValue");

function App() {
  const count = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
    // <AppContex.Provider value={{ searchValue, setSearchValue }}>
    //   <div className="wrapper">
    //     <Header />
    //     <div className="content">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/cart" element={<Cart />} />

    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </AppContex.Provider>
  );
}

export default App;
