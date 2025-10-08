import React, { useEffect } from 'react'

const Items = ({ shoppingItems, setCart, cart }) => {

  function addItem(item) {
    const newCart = [...cart, item];
    setCart(newCart)
    // localStorage.setItem("newCart", JSON.stringify(newCart))
    // localStorage.JSON.stringfy(newCart);
  }

  // useEffect(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   if (savedCart) {
  //     setCart(JSON.parse(savedCart));
  //   }
  // }, [setCart]);

  return (
    <div className='flex flex-row flex-wrap justify-center p-12 gap-10 bg-slate-300'>
      {
        shoppingItems.map((item, index) => {
          return (
            <div className='flex flex-col gap-7' key={index}>
              <p>{item.name}</p>
              {/* <p>{item.quantity}</p> */}
              <img className='w-50' src={item.image} />
              <p>${item.price}</p>
              {/* <p>{item.category}</p> */}
              <button onClick={() => {
                addItem(item)
              }} className='border-none border-solid rounded px-4 py-2 bg-white hover:bg-purple-60 cursor-pointer hover:bg-slate-600 hover:text-white'>Add To Cart</button>
              <br /><br />
            </div>
          )
        })
      }

    </div>
    
  )
}


export default Items