import React, { Component } from 'react';
import ReactPlayer from 'react-player';


class Weddings extends Component {
    render() {
        return (
            <div className= "weddings-wrapper">
                <div className="weddings-title">Weddings</div>

                <div className = "wedding-videos-wrapper">
                    <div className= "wedding-video">
                    <ReactPlayer 
                        className= "wedding-vid-one"
                        url = 'https://www.youtube.com/watch?v=u08fjXjxyp8'
                        width= '100%'
                        height = '100%'
                    />
                    </div>
                    <div className= "wedding-video">

                    <ReactPlayer
                        className= "wedding-vid-two"
                        url = 'https://www.youtube.com/watch?v=p_LSM4lsaF4'
                        width= '100%'
                        height = '100%'
                    />
                    </div>
                    <div className= "wedding-video">
                    <ReactPlayer
                        className= "wedding-vid-three"
                        url = 'https://www.youtube.com/watch?v=kI099k-Wqe4'
                        width= '100%'
                        height = '100%'
                    />
                    </div>
                </div>
            </div>
          
        )
    }
}

export default Weddings;