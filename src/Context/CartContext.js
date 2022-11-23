import axios from 'axios';
import React, { createContext, useEffect, useState} from 'react';

const CartContext = createContext();

function CartProvider({children}){
  
    window.localStorage.removeItem('CART')
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{
        const productExist = cart.find((cartItem) => cartItem._id === product._id);
        if(productExist){
            setCart(cart.map((cartItem) => cartItem._id === product._id ? 
            {...productExist, quantity: productExist.quantity + 1} : cartItem)
            );
        }else{
            setCart([...cart, {...product, quantity: 1}]);
        }
       console.log(cart)
        //window.localStorage.setItem('CART', JSON.stringify(cart))
    }
    const values = {
        cart,
        handleAddToCart
    }
    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}
