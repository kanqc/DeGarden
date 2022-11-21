import axios from 'axios';
import React, { createContext, useEffect, useState} from 'react';
import * as Constant from '../constants';

const CategoryContext = createContext();

function CategoryProvider ({children}){

    const [categories,setCategories] = useState([]);
    useEffect( () =>{
        const data = async () =>{
            const queryRes = await axios.post(
                Constant.GRAPHQL_API,{
                    query: Constant.getAllCategory
                }
            );
            const res = queryRes.data.data.getAllCategory.data;
            setCategories(res);
        };
        data();
    },[]);
        // console.log(categories);
    return(
        <CategoryContext.Provider value={[categories,setCategories]}>
            {children}
        </CategoryContext.Provider>
    )
}

export {CategoryContext, CategoryProvider};