import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice';
import { toast } from "react-hot-toast";

const FoodCard = ({ id, name, price, desc, img, rating, type, }) => {
  const dispatch= useDispatch();//we will be using this to use those funcs in reducer and dispatch the things which we want to dispatch

     return (
    <div className="font-bold w-[250px] bg-white p-5 mx-5 flex flex-col rounded-lg gap-2">
      <img
        src={img} 
        alt=""
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
         <span className='p-1'><BiFoodMenu className={`${type === "veg" ? "text-green-500" : "text-red-500"}`} /></span>
        <button onClick={()=>{
          dispatch(addToCart({id,name,price,rating,img,qty:1}))
        toast(`${name} Added to Chart`, {
            icon: "😊",
          });
        }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard