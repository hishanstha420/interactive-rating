import "./thankyou.css"
import "../App.css"
export default function Thanks(props){
    return(
        <div className="ThankYouPanel">
            <img className="ThankYou" src="/illustration-thank-you.svg" alt="thank you"></img>
            <p className="selected">You selected {props.rating} out of 5</p>
            <h1 className="title">Thank you</h1>
            <p className="description">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    )
}