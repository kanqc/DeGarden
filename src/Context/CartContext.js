import axios from 'axios';
import React, { createContext, useEffect, useState} from 'react';

const CartContext = createContext();

function CategoryProvider({children}){
    const [cart, setCart] = useState([]);

    return(
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

