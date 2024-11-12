import React from "react";
import './Product.css'
import ProductItems from "./ProductItems";

function Product(props)
{
    return(
       <div className="yellow-box-products">

         <ProductItems 
            date={props.items[0].date}
            title={props.items[0].title}
            amount={props.items[0].amount}
          />
          <ProductItems 
            date={props.items[1].date}
            title={props.items[1].title}
            amount={props.items[1].amount}
          />
          <ProductItems 
            date={props.items[2].date}
            title={props.items[2].title}
            amount={props.items[2].amount}
          />
          <ProductItems 
            date={props.items[3].date}
            title={props.items[3].title}
            amount={props.items[3].amount}
          />

       </div>
    );
}

export default Product;