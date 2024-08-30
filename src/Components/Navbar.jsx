import React from 'react'
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

function Navbar() {
  const dispatch=useDispatch()
  let date=new Date().toUTCString().slice(0,16)
  let Time = new Date().getHours()
  let Min = new Date().getMinutes()
  let sec =new Date().getSeconds()
  let mili = new Date().getMilliseconds()
  return (
    <nav className='flex flex-col justify-between lg:flex-row mx-6 p-3 mb-2'>
      <div>
        <h1 className='text-2xl bold uppercase'>Food App</h1>
      </div>
      <div className='text-xl uppercase'>
        <p className='text-gray-400 bold'>{date}</p>
        <p className='bold'>Time:- {Time}:{Min}:{sec}:{mili}</p>
      </div>
      <div>
        <input className="p-3 border border-gray-400 text-sm rounded-md outline-none w-full lg:w-[25vw]"type="search" name="search" id="" placeholder='Search Here' onChange={(e) => dispatch(setSearch(e.target.value))} autoComplete='off'/>
      </div>
    </nav>
  )
}

export default Navbar