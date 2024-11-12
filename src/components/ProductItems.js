import React, { useState } from "react";
import DateItem from './DateItem'
import './ProductItems.css'


function ProductItems(props)
{  
    const [title , settitle] = useState(props.title) ;

    function clickbuttonHandler()
    {
       settitle("popcorn");
    }

    return(
        <div className="blue-section">
            <DateItem date={props.date}/>
             <div className="button-descriptions-section">
             <div className="title-printon-ui">{title}</div>
             <button onClick={clickbuttonHandler}>Add to Cart</button> 
             </div>

        </div>
    );
}

export default ProductItems;