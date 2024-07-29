import React, { useContext } from "react";
import './FoodDisplay.css'
import { StoreContex } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContex)
    return (
        <div>
            <div className="className food-display" id="food-display">
                <h2>Top dishes near you</h2>
                <div className="className food-display-list">
                    {food_list.map((item,index)=>{
                        return<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price}  image={item.image} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default FoodDisplay