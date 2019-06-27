import React from 'react';
import ReactPlayer from 'react-player';

export default function() {
    return (
        <div>
            Homepage
            <div className= "video">
            <ReactPlayer
                className= "video-home"
                url={'https://www.youtube.com/watch?v=VWoIpDVkOH0'}
                config={{
                    youtube: {
                    playerVars: { showinfo: 1 }
                    },
                    facebook: {
                    appId: '12345'
                    }
                }}
            />
            </div>
        </div>
    )
}