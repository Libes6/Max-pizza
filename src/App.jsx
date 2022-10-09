import Loadable from "react-loadable";
import React from "react";
import { Routes, Route } from "react-router-dom";


import "./scss/app.scss";
import Header from "./components/Menu/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const AppContex = React.createContext("defaultValue")

function App() {
  
const [searchValue, setSearchValue] = React.useState('');

  return (
    <AppContex.Provider value={{searchValue,setSearchValue}}>
      
    <div className="wrapper">
      <Header />
      <div className="content">
        
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/cart" element = {<Cart/>}/>
          
            <Route path="*" element = {<NotFound/>}/>

          </Routes>
          {/* <Home /> */}
      
      </div>
    </div>
    </AppContex.Provider>
  );
}

export default App;
