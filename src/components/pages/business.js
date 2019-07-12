import React, { Component } from 'react';
import ReactPlayer from 'react-player';


class Business extends Component {
    render() {
        return (
            <div className= "business-wrapper">
                <div className="business-title">Business</div>

                <div className = "business-videos-wrapper">
                <div className= 'business-vid'>
                <ReactPlayer 
                        className= "business-vid-one"
                        url = 'https://www.youtube.com/watch?v=ZotiTu0uYSI'
                        width= '100%'
                        height= '100%'
                    />
                </div>
                <div className= 'business-vid'>
                    <ReactPlayer
                        className= "business-vid-two"
                        url = 'https://www.youtube.com/watch?v=ue3JrSHHIiM'
                        width= '100%'
                        height= '100%'
                    />
                  </div>
                </div>
            </div>
        )
    }
}

export default Business;