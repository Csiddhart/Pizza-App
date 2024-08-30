import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {removeFromCart,decrement,increment} from '../redux/slices/CartSlice'
import { toast } from "react-hot-toast";

function CartItem({ id, name, qty, price, img }) {
  const dispatch = useDispatch();
  return (
   <div className="flex gap-2 shadow-md rounded-lg p-3 mb-3">
      <MdDelete onClick={() => {
          dispatch(removeFromCart({id, name, qty, price, img }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-5 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px] " />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800 p-1">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-3 absolute right-7 ">
            <button className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-sm  cursor-pointer" onClick={() =>
                {
               if (qty > 1)  dispatch(decrement({ id })) }
              }>-</button>
            <span>{qty}</span>
            <button className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-sm  cursor-pointer" onClick={() =>
                 dispatch(increment({ id }))
              }>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem