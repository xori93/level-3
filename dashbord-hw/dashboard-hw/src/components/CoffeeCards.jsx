import React, { useState, useMemo, useEffect } from "react";


const CoffeeCards = ( { data, filterData } ) => {

  

  return (
  <div className="flex flex-row flex-wrap p-8 gap-8 justify-center">
    {
      filterData.map((item, index) => {
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
