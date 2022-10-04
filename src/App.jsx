import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header'
import Categories from './components/Categories'
import Content from './components/Content'
import Sort from './components/Sort'
import pizzas from './assets/pizza.json'
import PizzaBlock from './components/PizzaBlock';
function App() {

const[items,setItems] = React.useState([])

React.useEffect(() =>{

fetch('https://629a283d6f8c03a97851d8dc.mockapi.io/items')
.then(res=>{
    return res.json()
  })
  .then((json) => {
    setItems(json)
  });

},[])

  
  return (
    <div className="wrapper">
   <Header/>
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories/>
         <Sort/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <Content items={items}/>
    
        
      </div>
    </div>
  </div>
  );
}

export default App;