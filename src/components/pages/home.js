import React, { Component} from 'react';
import ReactPlayer from 'react-player';

class ResponsivePlayer extends Component {
    render() {

    
    return (
        <div className= "homepage-wrapper">
            <div className="home-title">
                Forward Ever. Stopping Never.
            </div>
            <div className= "video-wrapper">
            <ReactPlayer
                className= "video-home"
                url= 'https://www.youtube.com/watch?v=bG8YfHXmQXw'
                width = '1000px'
                height = '500px'
                volume= '0'
                muted = 'true'
                playing
            />
            </div>

        </div>
        )
    }   

}

export default ResponsivePlayer;