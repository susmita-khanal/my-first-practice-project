import React from 'react';
import "./Product.css";

const Product = () => {
    return (
        <div>
            <div className="contact-section">
                <div className="contact-form">
                <div className="title">Contact us</div>
                <form>
                <div className="user-details">
                   <div className="input-box">
                       <span className="detail">firstName</span>
                       <input type="text" placeholder="enter your Name" required/>
                   </div>

                   <div className="input-box">
                       <span className="detail">lastName</span>
                       <input type="text" placeholder="enter your Name" required/>
                   </div>

                   <div className="input-box">
                       <span className="detail">email</span>
                       <input type="text" placeholder="enter your Name" required/>
                   </div>

                   <div className="input-box">
                       <span className="detail">phone</span>
                       <input type="text" placeholder="enter your Name" required/>
                   </div>

                   <div className="input-box">
                       <span className="detail">Message</span>
                       <textarea className="message-field" placeholder="Drop your message"></textarea>
                   </div>
                   <div className="submit-btn">
                       <input type="submit" className="button" value="Send"/>
                   </div>
                </div>
                </form>
            </div>
        </div>
        </div>
        
    )
}

export default Product

