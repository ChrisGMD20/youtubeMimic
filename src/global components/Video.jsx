import dots from '../assets/SVGs/dots.svg'
import verified from '../assets/SVGs/verified.svg'

import PropTypes from 'prop-types'




export default function Video({props}) {

    return(
        <div className='video'>

            <div className="video-preview">
                <img src={props.videoPreview} alt="video preview" />
            </div>

            <div className="video-info">

                <img className="content-creator-img" src={props.videoUploader} alt="video uploader" />
                <div className="video-ids">
                    <p className="video-title">{props.videoTitle}</p>
                    <p className="channel-name">{props.channelName}{props.verified ? <img src={verified} alt="verified"/> : undefined}</p>
                    <p className="video-count">
                        <span className='video-views'>{props.videoViews} views </span> <span className='video-upload-time'>{props.uploadTime}</span>
                    </p>
                </div>
                <img className="video-info-more" src={dots} alt="more-info" />
                
            </div>

        </div>

    )
}

Video.propTypes = {
    props: PropTypes.object,
    videoPreview: PropTypes.string,
    videoTitle: PropTypes.string,
    videoUploader: PropTypes.string,
    channelName: PropTypes.string,
    videoViews: PropTypes.string,
    uploadTime: PropTypes.string,
    verified: PropTypes.bool
}