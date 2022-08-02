import './App.css';
import React from 'react';
import { BrowserRouter as  Router, Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Products from './components/Products';
import StoreDetail from './components/StoreDetail';
import AddProduct from './components/AddProduct';
import ViewOrders from './components/ViewOrders';

function App() {
  return (
    <>
      <Routes>
      <Route path = "/" element =  {<Navbar/>}></Route>
      <Route path = "/products" element =  {<Products/>}></Route>
      <Route path = "/storedetail" element =  {<StoreDetail/>}></Route>
      <Route path = "/addproduct" element =  {<AddProduct/>}></Route>
      <Route path = "/vieworders" element =  {<ViewOrders/>}></Route>
      <Route path="*" element={<main><p>There's nothing here!</p></main>}></Route>
      </Routes>
    </>
  );
}

export default App;
