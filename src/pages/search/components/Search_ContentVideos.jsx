import PropTypes from 'prop-types'
// import { useContext } from "react"

import Search_Video from './Search_Video'

export default function Search_ContentVideos({videos}) {


    return (


        <div className="videos">
        {
            videos.map((video, key) => (
                <Search_Video key={video.videoTitle + key} props={video}/> ))
                
        }
        </div>

    )
}

Search_ContentVideos.propTypes = {
    videos: PropTypes.array
}