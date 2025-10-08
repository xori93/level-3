import React from 'react'

const header = () => {
  return (
    <div className='w-1/2'>
      <div className='flex flex-col gap-8'>
      <h4>TAX LAWYER</h4>
      <h1>Guiding You Through <span className='text-green-400'>Tax</span> Complexity</h1>
      <p>We simplify tax complexities with tailored strategies,
        resolving disputes and ensuring compliance for local
        and international needs
      </p>

      <button className='w-50 m-auto my-12 bg-green-400 text-white text-2xl'>Start Consultation</button>
      </div>


      <div className='flex flex-wrap gap-3'>
        <button>International Taxation</button>
        <button>Tax Disputes</button>
        <button>Tax Planning</button>
        <button>Tax Compliance</button>
        <button>Consultations</button>

      </div>



    </div>
  )
}

export default header