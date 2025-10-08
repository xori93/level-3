import React, { useState, useEffect } from 'react'
import Total from './Total';


const Cart = ({ cart, setCart, totalAmount }) => {

  const handleDelete = (id) => {
    // the filter method returns a new array
    const newCartItems = cart.filter((item) => item.id !== id);
    // setCart(cart.filter((item) => item.id !== id))
    setCart(newCartItems);

    localStorage.setItem("newCart", newCartItems);
    //  setCart(localStorage.JSON.stringyfy())
  }

  

  return (
    <div className='flex flex-col items-center justify-start p-16 gap-10 bg-slate-300 w-[85%]'>
      <h1 className='text-xl'>Cart List</h1>
      {
        cart.map((item, index) => {
          return (
            <div className='flex flex-col gap-7' key={index}>
              {item.name}
              <img className='w-50' src={item.image} alt="" />
              ${item.price}
              <br />
              <button className="mt-2 px-3 py-1 bg-slate-50 text-black rounded hover:bg-slate-600 hover:text-white"
                onClick={() => handleDelete(item.id)}>Delete Item
              </button>
              <br /><br />
            </div>
          )
        })
      }
      <Total totalAmount={totalAmount}/>
    </div>
  )
}

export default Cart