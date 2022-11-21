import React from 'react';
import '../banner/Banner.css';

function Banner(props){
    return(
        <div className='banner-container'>
           <img src={props.pic} alt='banner-pic'></img>
           
        </div>
    );
}

export default Banner;