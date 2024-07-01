import PropTypes from 'prop-types'
// import { useContext } from "react"

import Video from "./Video.jsx"

export default function ContentVideos({videos}) {


    return (


        <div className="videos">
        {
            videos.map((video, key) => (
                <Video key={video.videoTitle + key} props={video}/> ))
                
        }
        </div>

    )
}

ContentVideos.propTypes = {
    videos: PropTypes.array
}