import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
           <h3>Order Summary</h3>
           <p>selected Items:{props.cart.length}</p>
        </div>
    );
};

export default Cart;