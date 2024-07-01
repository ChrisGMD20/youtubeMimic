import PropTypes from 'prop-types'
import dots from '../assets/SVGs/dots.svg'

export default function Short({props}) {

    return(
        <>
            <div className='short'>

                <div className="short-preview">
                    <img src={props.shortPreview} alt="short preview" />
                </div>

                <div className="short-info">
                    
                    <div className="short-ids">
                        <p className="short-title">{props.shortTitle}</p>
                        <p className="short-views">{props.shortViews} views</p>
                    </div>
                    <img className="short-info-more" src={dots} alt="more-info" />

                </div>

            </div>
        </>
    )
}

Short.propTypes = {
    props: PropTypes.object,
    shortPreview: PropTypes.string,
    shortTitle: PropTypes.string,
    shortViews: PropTypes.string,
}