import React from 'react';
import './Button.css';

function Button({children, type, onClick, buttonStyle}){
    const btnStyle = [
        "btn--default",
        "btn--addToCart--card",
        "btn--addToCart--detail",
        "btn--payment",
        "btn--continute--shopping"
    ];
    
    const checkBtnStyle = btnStyle.includes(buttonStyle) ? buttonStyle : btnStyle[0];
    return(
        <button className={`btn ${checkBtnStyle}`}>{children}</button>
    );
}

export default Button;