import React, { useState, useEffect } from "react";
import axios from "axios";

const CoffeeCards = () => {

  const [data, setData] = useState([]);

  
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

  return (
  <div className="flex flex-row flex-wrap p-8 gap-8 justify-center">
    {
      data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center p-6 w-[300px] gap-4 bg-white border rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">
              {item.name}
            </h3>
    
            <img className="w-80 h-60 object-cover rounded" src={item.image} alt={item.name}/>
            <p className="text-sm text-gray-700 text-center">{item.description}</p>
            <p className="font-semibold text-green-700">{item.category}</p>
          </div>
        )
      })
    }
  </div>
  );
};

export default CoffeeCards;
