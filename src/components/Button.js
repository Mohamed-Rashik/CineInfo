import React from 'react'

export const Button = ({children}) => {
  return (
    <button className='w-64 text-xl bg-green-500 rounded-lg px-5 py-2.5 mx-2 my-2 font-medium dark:text-white'>{children}</button>
  )
}
