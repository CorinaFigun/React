import './App.css';
import Navbar from "./assets/components/NavBar";
import ItemListContainer from './assets/components/ItemListContainer';
import { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import ProductItem from './assets/components/ProductItem';
import ItemListFiltered from './assets/components/ItemListFiltered';
import Index from './assets/components/Index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/fcbfd3cd-3f3f-453b-8eee-9f205f02a649")
    .then((response) => response.json())
    .then((data) => setProducts(data))
  }, [])
  
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Index></Index>} />
        <Route path="productos" element={<ItemListContainer products={products}/>} />
        <Route path=":id" element={<ProductItem products={products}/>} />
        <Route path="productos/:id" element={<ProductItem products={products}/>} />
        <Route path="nuevas" element={<ItemListFiltered products={products} estado="no"/>} />
        <Route path="/nuevas/:id" element={<ProductItem products={products}/>} />
        <Route path="usadas" element={<ItemListFiltered products={products} estado="si"/>} />
        <Route path="/usadas/:id" element={<ProductItem products={products}/>} />
      </Routes>
        </div>
        </BrowserRouter>
  )
}

export default App