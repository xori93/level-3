import React, { useState, useEffect } from 'react'
import './App.css'
import CoffeeCards from './components/CoffeeCards'
import Header from './components/Header'
import axios from "axios";


export default function App() {
 
  const [category, setCategory] = useState("");

  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  //filter takes an arrow function
  const filterData = data.filter((item) => {
    return category === item.category 
  })
console.log(filterData);


  
  useEffect(() => {
    const fetchRecipes = async () => {
      const options = {
        method: "GET",
        url: "https://starbucks-coffee-db2.p.rapidapi.com/api/recipes",
        headers: {
          "x-rapidapi-key": "4e8d11944bmshcf7b6b79ab03738p14e169jsnc3a27e11de72",
          "x-rapidapi-host": "starbucks-coffee-db2.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  //filter drinks by selected category

// const filteredDrinks = useMemo(()=>{
//   if (!category) return drinks;
//   return drinks.filter((drink) => drink.category === category);
// }, [category])

  return (
    //max-w-md mx-auto p-6 space-y-4 text-zinc-200
    <div className="">
      <Header category={category} setCategory={setCategory} data={data} />
      
      {/* <h2 className='text=lg font-semibold'>Filtered Categories</h2> */}
      
       {/* <ul className='space-y-2'>
        {filteredDrinks.map((drink) => (
          <li
          key={drink.id}
          className="border rounded px-4 py-2 capitalize text-center"
          >
            {drink.category}
            
            </li>
        ))}
        </ul> */}
        <CoffeeCards category={category} data={data} filterData={filterData} />
      </div>
  )
}      