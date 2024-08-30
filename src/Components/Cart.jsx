import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import CartItem from './CartItem'
import {useSelector} from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [active,setActive]=useState(false)
     const navigate = useNavigate();

    const cartItem =useSelector((state)=>state.cart.cart);//so selector(jeta hoye ache[dispatched]seta k select kore display korabo) diye amra store a gelam(slice er function ta oram bhabe naming kora) then okhane theke tomar sei function er initialState er oi jayega teh giye push/remove kore dicchi
    console.log(cartItem);
    const totalItems = cartItem.reduce((previous, current) => previous + current.qty, 0);//callback er bhetore cal hocche and taar pore initial val set kore dewa hocche
    const totalPrice = cartItem.reduce((previous, current) => previous + current.price * current.qty, 0);

    
    return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white mb-3 mx-1 ${active?"translate-x-0":"translate-x-full"} transition-all duration-500 z-50`}>
        <div className=' flex justify-between p-3 m-1 items-center'>
            <span className='text-gray-500 font-bold text-xl'>My Order</span>
            <IoMdClose onClick={()=>setActive(!active)} className='border-2 border-gray-300 text-gray-300 font-bold p-1 text-3xl rounded-md hover:text-red-300 hover:bg-red-400 cursor-pointer'/>
        </div>

       {//cartItem ta actually oi array ta, selector method diye amra ota k ekhane daakhchi
        cartItem.length>0?
        (cartItem?.map((food)=>{
            return ( <CartItem key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}/>)
        })):(<h2 className='text-xl font-bold text-center'>Your Cart is Empty</h2>)
       }
    
    <div className='absolute bottom-0 justify-center p-3 m-1 items-center'>
        <h3 className='text-gray-700 font-bold'>
            Items:{totalItems}
        </h3>
        <h3 className='text-gray-700 font-bold'>
            Total Price:{totalPrice}
        </h3>
        <br />
        <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
         onClick={() => navigate("/success")}
           >Checkout</button>
    </div>
    </div>
    <FaShoppingCart onClick={()=>{setActive(!active)}} className={`rounded-full bg-white text-black shadow-xl text-5xl p-3 fixed bottom-4 right-5 cursor-pointer ${totalItems >0 && " animate-bounce delay-500 transition-all "}`}/>
  </>
  )
}

export default Cart