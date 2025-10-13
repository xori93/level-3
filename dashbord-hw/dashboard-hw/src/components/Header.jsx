import React from 'react'

const Header = ({category, setCategory}) => {

  // const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("");

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
        <option className='text-black' value="hot beverage">Hot Beverage</option>
        <option className='text-black' value="iced beverage">Ice Beveage</option>
        <option className='text-black' value="syrups">Add-Ins</option>
        <option className='text-black' value="syrups">Syrups</option>
        <option className='text-black' value="food">Food</option>
        <option className='text-black' value="food">Cafe-Inspired Recipes</option>
      </select>
      <input 
        type="text" 
        placeholder='Search for drinks...'
        className='border rounded px-3 py-1 cursor-pointer text-zinc-300'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default Header