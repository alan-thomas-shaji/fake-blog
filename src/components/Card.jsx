import React from 'react'

const Card = ({ title }) => {
  return (
    <div className='w-full font-semibold text-xl rounded-md shadow-md border-l-4 p-4 bg-gray-50'>
        <p>{title}</p>
    </div>
  )
}

export default Card