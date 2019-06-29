import React from 'react';
import ReactPlayer from 'react-player';

export default function() {
    return (
        <div className= "homepage-wrapper">
            <div className="home-title">
                Forward Ever. Stopping Never.
            </div>
            <div className= "video">
            <ReactPlayer
                className= "video-home"
                url= 'https://www.youtube.com/watch?v=bG8YfHXmQXw'
                // config={{
                //     youtube: {
                //     playerVars: { showinfo: 1 }
                //     },
                //     facebook: {
                //     appId: '12345'
                //     },
                // }}
                playing
            />
            </div>

        </div>
    )
}