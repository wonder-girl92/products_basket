import React from 'react';
import checkout from './shopping-cart.svg'


function Checkout(props) {

const count = props.database.filter ((item)=> {
    if (item.bought === true) {
        return true
    }
   return false
})
            return (
        <div className="checkout">
            <a href="#/checkout">
           <img src={checkout} alt="checkout"/>
        <span className="counter"> {count.length} </span>
            </a>
</div>
    );
}

export default Checkout;