import React, { useState, useMemo } from 'react'
import './App.css'
import CoffeeCards from './components/CoffeeCards'
import Header from './components/Header'

const drinks = [{
  id: 1, category: "hot beverage", 
  id: 2, category: "ice beverage", 
  id: 3, category: "add-ins", 
  id: 4, category: "syrups", 
  id: 5, category: "food", 
  id: 6, category: "cafe-inspired recipes", 
}];

export default function App() {
 
  const [category, setCategory] = useState("");

  //filter drinks by selected category

const filteredDrinks = useMemo(()=>{
  if (!category) return drinks;
  return drinks.filter((drink) => drink.category === category);
}, [category])

  return (
    <div className="max-w-md mx-auto p-6 space-y-4 text-zinc-200">
      <Header category={category} setCategory={setCategory} />
      
      <h2 className='text=lg font-semibold'>Filtered Categories</h2>
      
       <ul className='space-y-2'>
        {filteredDrinks.map((drink) => (
          <li
          key={drink.id}
          className="border rounded px-4 py-2 capitalize text-center"
          >
            {drink.category}
            
            </li>
        ))}
        </ul>
        <CoffeeCards category={category} />
      </div>
  )
}      