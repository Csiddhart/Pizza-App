import React from 'react'
import Navbar from '../Components/Navbar'
import Filter from '../Components/Filter'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

function Home() {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <FoodItems/>
      <Cart/>
    </div>
  )
}

export default Home