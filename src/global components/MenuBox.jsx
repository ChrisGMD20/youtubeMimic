import PropTypes from 'prop-types'

export default function MenuBox({children}) {

    return(
            <div style={{right: 120, top:55}} className="menu-box">
                {children}
            </div>
    )
}

MenuBox.propTypes = {
    children: PropTypes.object
}