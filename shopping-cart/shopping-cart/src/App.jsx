// import { useState } from 'react'
import React, { useState, useEffect } from 'react'
import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import Items from './components/Items'
import Total from './components/Total'


// App starts 
function App() {
  // Check local storage value for existing items from last session
  const savedCart = localStorage.getItem("newCart");
  // default cart to empty array
  const [cart, setCart] = useState([]);

  // Set your default cart to be the parsed value if there is something before
  let parsedValue = JSON.parse(savedCart);
  if (parsedValue)
    setCart(parsedValue);
  
  // Reduce loops over ever Item in the cart
  const totalAmount = cart.reduce((total, item) => total += item.price, 0 )
  
  
  useEffect(() => {
    // const savedCart = localStorage.getItem("newCart");
    // if (savedCart) {
    //   setCart(JSON.parse(savedCart));
    // }

    localStorage.setItem("newCart", JSON.stringify(cart));
  }, [cart]);

  const shoppingItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1625245488600-f03fef636a3c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 79.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1527706005773-ae5d75e90c0e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Footwear",
    },
    {
      id: 3,
      name: "Coffee Maker",
      price: 49.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1565452344518-47faca79dc69?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Home Appliances",
    },
    {
      id: 4,
      name: "Backpack",
      price: 39.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1702906221006-97bc40420704?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Accessories",
    },
  ];


  return (
    <>
      <Header />
      <div className='flex flex-row gap-12'>
        <Items shoppingItems={shoppingItems} setCart={setCart} cart={cart} />
        <Cart cart={cart} setCart={setCart}  totalAmount={totalAmount}/>
      </div>
      
    </>
  )
}

export default App
