import React from 'react';
import './Central.css';

function Central(props){
    return(
        <div className='central-container'>
            <p className='central-text'><span>{props.text}</span></p>
        </div>
    )
}

export default Central;