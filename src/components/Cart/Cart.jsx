import React from 'react'
import "./Cart.css"
import { useState } from 'react';

export default function Cart() {

    const [counter, setCounter] = useState(1);
    return (
        <div className = "cart-el">
            <button>
            <i className="operator" onClick={ () => setCounter(counter - 1)}>-</i>
            </button>
            
            <input type="text" name="cart-counter" value={counter} className="cart-counter"/>
            <button>
            <span className="operator" onClick={ () => setCounter(counter + 1)}>+</span>
            </button>
        </div>
    )
}
