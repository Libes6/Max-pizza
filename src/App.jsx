import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header'
import Categories from './components/Categories'
import Content from './components/Content'
import Sort from './components/Sort'

function App() {
  return (
    <div class="wrapper">
   <Header/>
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Categories/>
         <Sort/>
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <Content/>
      </div>
    </div>
  </div>
  );
}

export default App;