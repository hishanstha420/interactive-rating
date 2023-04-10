import { useState } from "react";
import "./rating.css";
import "../App.css"
import Thanks from "./thanking";
export default function Rating()
{
    let ratings=[1,2,3,4,5]
    const [selectedRating, setSelectedRating]=useState(Number);
    const [isSubmitted, setIsSubmitted]=useState(false)
    function handleRatingClicked(number)
    {
        setSelectedRating(number);
    }
    function handleSubmitted(e)
    {
        e.preventDefault();
        setIsSubmitted(true);
    }
    
    return isSubmitted ? <Thanks rating={selectedRating}/>:(
  
    
        <form onSubmit={handleSubmitted}  className="Panel">
            <img className="staricon" src="/icon-star.svg" alt="icon"></img>
            <h1 className="title">How did we do?</h1>
            <p className="description"> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="Group">
            {ratings.map((rating,index)=>
            <button type="button" className="rating" onClick={
                ()=>handleRatingClicked(rating)
            }>{rating}</button>)}
            
            </div>
            
            <button disabled={!selectedRating}
              className="Submit">Submit</button>
        </form>
        
        
    )
}