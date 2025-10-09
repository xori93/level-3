import React, { useEffect } from "react";
import axios from "axios";

const CoffeeCards = () => {
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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return <div>CoffeeCards</div>;
};

export default CoffeeCards;
