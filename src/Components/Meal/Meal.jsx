import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBowlFood} from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    // console.log(props.meal);
    const handleAddToCart=props.handleAddToCart;
    const {name,price,strMealThumb,seller,ratings}=props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className='meal-info'>
                <h6 className='meal-name'>{name}</h6>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.meal)} className='cart-btn'>Add To Cart
            <FontAwesomeIcon icon={ faBowlFood } /></button>
        </div>
    );
};

export default Meal;