import React from 'react';

import contactPicture from "/Users/michaelingleton/Documents/Documents/videographer-site/static/assets/images/contactpic.jpg"




export default function() {
        return (
            <div className= "contact-wrapper">
           
                <div className="contact-title">Contact</div>
                

            <div className="contact-content">
                <div className = "left-column">
                    <img src={contactPicture} className='about-page-image' alt='Profile Pic'></img>
                </div>
                

                <div className="right-column">
               
                    <div className= "contact-bullet-points">
                    <div className= "contact-info-price">
                    Please contact me for rates and booking details:
                    </div>
                        <div className= "bullet-point-group">
                            <div className= "icon">
                                Phone Number:
                            </div>
                        <div className = "text">
                            (xxx) xxx-xxxx
                        </div>
                    </div>
                    

                    <div className= "bullet-point-group">
                        <div className= "icon">
                            Email:
                        </div>
                        <div className = "text">
                            kalai.ellis@email.com
                        </div>
                    </div>
                

                    <div className= "bullet-point-group">
                        <div className= "icon">
                            Instagram:
                        </div>
                        <div className = "text">
                            <a href="https://www.instagram.com/oceanellis/?hl=en" target="_blank">@oceanellis</a>
                        </div>
                    </div>

                      </div>
                  </div>

                </div>

            </div>

        )
    }




