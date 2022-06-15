import React from 'react'

function Button({ add, subtract, val, setVal}) {
  const change = () => {
    add ? setVal(val + 1) : setVal(val -1)
  }
  return (
    <button className={`px-5 mx-2 py-2 rounded-xl ${add ? 'bg-blue-400 active:bg-blue-500' : 'bg-red-400 active:bg-red-500'} text-2xl text-white font-bold`} onClick = {change}>{add ? 'Add + 1' : 'Subtract - 1'}</button>
  )
}

export default Button