import React, { useEffect, useState } from 'react';
import './Restora.css'
import Meal from '../Meal/Meal';

const Restora = () => {
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        fetch('meals.json')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])
    return (
        <div className='restora-container'>
            <div className='meal-container'>
                {
                    meals.map(meal=><Meal
                    key={meal.id}
                    meal={meal}></Meal>)
                }
            </div>
            <div className='cart-container'>
                <h3>this is cart summary</h3>
            </div>
        </div>
    );
};

export default Restora;