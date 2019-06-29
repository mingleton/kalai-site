import React, { Component } from 'react';
import ReactPlayer from 'react-player';


class Business extends Component {
    render() {
        return (
            <div className= "business-wrapper">
                <div className="business-title">Business</div>

                <div className = "business-videos-wrapper">
                <ReactPlayer 
                        className= "business-vid-one"
                        url = 'https://www.youtube.com/watch?v=ZotiTu0uYSI'
                    />
                    <ReactPlayer
                        className= "business-vid-two"
                        url = 'https://www.youtube.com/watch?v=ue3JrSHHIiM'
                    />
                    {/* <ReactPlayer
                        className= "business-vid-three"
                        url = 'https://www.youtube.com/watch?v=kI099k-Wqe4'
                    /> */}
                </div>
            </div>
        )
    }
}

export default Business;