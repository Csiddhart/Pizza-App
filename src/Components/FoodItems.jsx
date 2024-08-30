import React from 'react'
import FoodData from '../data'
import FoodCard from './FoodCard'
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

function FoodItems() {
  const category=useSelector((state)=>state.filter.filter) //filterslice ta select korlam
  const search = useSelector((state) => state.search.search);//searchslice select korlam
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {/* aage amra search ta handel korchi, search er type er hisab a o filter hobe 
                                                              aar emnio filter hobe */}
        {FoodData.filter((food) => {//ebar data taar opor filter chalalaam j -->
          if (category === "All") { //ekhane dekhe bhujchi j --> ja naam  data r ache, setar sob element gulo r aar tomar search a ja likhchi sei gulo k sob lower koriye then dekhchi j oi gulo category teh ache jodi ha then result dao aar seta o dekhabe tomar jotoh ta search korechi totoh taar jonne
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else { //kaaj ta hocche tomar category ta aakta teh set kora and result dicche,now search er input jodi oi filter/category teh kichu o match hole seram result dao. search er sathe filter taa eram bhabe kaaj korche j jotoh ta likhbe sei hisab a filter hobe 
            return (//na hole all dao 
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())//ekhane o same
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            type={food.type}
          />
        ))}
      </div>
  )
}

export default FoodItems