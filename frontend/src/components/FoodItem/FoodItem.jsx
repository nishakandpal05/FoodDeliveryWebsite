import React from "react";
import './FoodItem.css'
import { assets } from "../../assets/assetss";

const FoodItem = ({id,name,price,description,image}) =>{
    return (
        <div className = 'food-item'>
            <div className='food-item-img-container'>
                <img className="food-item-image" src = {image} alt="" />
            </div>
            <div className="className food-item-info">
                <div className="className food-item-name-rating">
                    <p>{name}</p>
                    <img src = {assets.rating_starts} alt=""/>
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">Rs.{price}</p>
            </div>

        </div>
    )
}
export default FoodItem