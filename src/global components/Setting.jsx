import PropTypes from 'prop-types'
import { forwardRef } from 'react'

export const Setting = forwardRef(function Setting({id, img, imgDescription, setting, next, ...props}, ref) {

    return(
        //pass an event instead
        //pass an event instead
        //pass an event instead
        <p onClick={()=>props?.clickHandler(ref.current)} id={id} ref={ref}>
            {img? <img src={img} alt={imgDescription} /> : undefined}
            <span>{setting}</span>
            {next? <img style={{margin: 0, marginLeft:"auto"}} className='more' src={next} alt="more" />:undefined}
        </p>
    )
})

Setting.propTypes = {
    id: PropTypes.string,
    img: PropTypes.string,
    imgDescription: PropTypes.string,
    setting: PropTypes.string,
    next: PropTypes.string,
    clickHandler: PropTypes.func
}
