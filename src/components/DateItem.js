import React from "react";
import './DateItem.css';

function DateItem(props)
{
    return(
        <div className="black-section">
        <div >{props.date.toLocaleString('en-US', { month: 'long' })}</div>
        <div >{props.date.toLocaleString('en-US', {day:'2-digit'})}</div>
        <div >{props.date.getFullYear()}</div>
        
        </div>
    );
}

export default DateItem;