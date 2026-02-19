import React, { useState, useEffect } from 'react'
import ProductCard from "./ProductCard";

export default function App() {
  const[products,setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((response)=> response.json())
    .then((data)=>{
    setProducts(data.products);
    })
    .catch((error)=>{
      console.error("Error fetching products:", error);
    });
  },[]);
  
return (
  <div className="app">
    <h1>K.Manikanta</h1>
    <h1>Product Listing:- 2500040223</h1>
    {products.length === 0 ? (
      <p>No products available</p>
    ) : (
      products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))
    )}
  </div>
)

  
}
