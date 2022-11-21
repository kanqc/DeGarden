import axios from 'axios';
import React, { useState , useContext , useEffect, createContext} from 'react';
import * as Constant from '../constants';

const productContext = createContext();

function ProductProvider({children}){
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const data = async() =>{
            const queryRes = await axios.post(
                Constant.GRAPHQL_API,{
                    query: Constant.getAllPlantQuerry,
                },
            );
            const res = queryRes.data.data.getAllBonsai.data;
            setProducts(res)
        };
        data();
    },[])
    // console.log(products)
    return(
            <productContext.Provider value={[products,setProducts]}>
                {children}
            </productContext.Provider>
    )
}

export {productContext,ProductProvider};