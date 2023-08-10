import React, { useEffect, useState } from 'react';
import './Restora.css'
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';

const Restora = () => {
    const [meals,setMeals]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('meals.json')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])

    const handleAddToCart=(meal)=>{
       const newCart=[...cart,meal];
       setCart(newCart);

    }
    return (
        <div className='restora-container'>
            <div className='meal-container'>
                {
                    meals.map(meal=><Meal
                    key={meal.id}
                    meal={meal}
                    handleAddToCart={handleAddToCart}></Meal>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Restora;