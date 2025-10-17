import React from 'react'

const Header = ({category, setCategory}, data) => {

  // 

  //useMemo helps to remember a function logic, so react, can use it later unless dependencies change

  return (
    <div className='flex flex-row justify-between p-8 items-center gap-4'>
      <h1 className='text-2xl text-center font-bold text-zinc-300'>Xori's Starbucks Drink</h1>
      <select 
        name="category"
        className='border rounded px-3 py-1 cursor-pointer text-zinc-300'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option className='text-black' value="">Category</option>
        <option className='text-black' value="HOT BEVERAGES">Hot Beverage</option>
        <option className='text-black' value="ICED BEVERAGES">Ice Beveage</option>
        <option className='text-black' value="ADD-INS">Add-Ins</option>
        <option className='text-black' value="SYRUPS">Syrups</option>
        <option className='text-black' value="FOOD">Food</option>
        <option className='text-black' value="CAFÉ-INSPIRED RECIPES">Cafe-Inspired Recipes</option>
      </select>
      <input 
        type="text" 
        placeholder='Search for drinks...'
        className='border rounded px-3 py-1 cursor-pointer text-zinc-300'
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default Header