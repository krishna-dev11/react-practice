import React, { useState } from "react";
import './Newproduct.css'

function Newproduct()
{
   function addbuttonHandler(event)
   {
        event.preventDefault();

        const productData =
        {
           title:newtitle,
           date:newdate
        }

        console.log(productData)
   }

   const [newtitle,settitle] =useState("")
   const [newdate,setdate] = useState("")

   function titleHandler(event)
   {
    settitle(event.target.value)
   }

   function dateHandler(event)
   {
      setdate(event.target.value)
   }

    return(
        <form onSubmit={addbuttonHandler} className="new-product-section">
            <div>
                <label htmlFor="forinput">Title:- </label>
                <input type="text" id="forinput" value={newtitle} onChange={titleHandler}></input>
            </div>
            <div>
                <label htmlFor="fordate">Date:- </label>
                <input type="date" id="fordate" onChange={dateHandler}></input>
            </div>
            <button className="add-product-button">Add Product</button>
        </form>
    );
}

export default Newproduct;