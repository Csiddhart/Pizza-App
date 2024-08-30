import React, { useState,useEffect } from 'react'
import FoodData from "../data";
import {useDispatch,useSelector} from "react-redux"
import { setFilter } from '../redux/slices/FilterSlice';

function Filter() {
  const [filters,setFilters]=useState([]);

  const listUniqueFilters = () => {  //we are making func here 
    const uniqueFilters = [
      ...new Set(FoodData.map((food) => food.category.trim())), //now on this array we find and set(using set func) all the filters
    ];
    setFilters(uniqueFilters);//now we will be updating that useState
    console.log(uniqueFilters);
  };

  useEffect(() => {
    listUniqueFilters();//whenever any btn is clicked this action will be performed
  }, []);

  const dispatch =useDispatch();
  const setFat=useSelector((state)=>state.filter.filter)
  console.log(setFat); 

  return (
    <div className='ml-5 mt-3'>
      <div className='text-xl font-semibold'><h2>Category You Like</h2></div>
      <div className='gap-3 my-5 flex overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button onClick={()=>dispatch(setFilter("All"))} className={`px-3 py-2 bg-gray-200 font-bold rounded-md hover:bg-green-300 hover:text-white ${setFat==="All"&&"bg-green-500 text-white"}`}>
          All
        </button>
        {
          filters?.map((fi)=>{
            return (
              <button 
              onClick={()=> {
                console.log(fi);
                
                dispatch(setFilter(fi))}
              }
              key={fi}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                setFat === fi && "bg-green-500 text-white"
              } `}
              >{fi}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Filter