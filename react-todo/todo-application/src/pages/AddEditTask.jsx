import React from 'react'

const AddEditTask = () => {
  return (
    <div className='max-w-2xl'>
      <h2></h2>
      <form className="space-y-3 bg-white p-4 rounded shadow">
        <input type="text" placeholder='Title'/>
        <textarea type="text" placeholder='Description' />
        <input type="date" name="dueDate" />

        <select name="" id="">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input name="tags" placeholder='Tags' />

        <select>
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <div className='text-blue-500 gap-5'>
          <button className='gap-5'>Save</button>
          <button>cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddEditTask