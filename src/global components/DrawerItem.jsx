import PropTypes from 'prop-types'

export default function DrawerItem({img, label}) {

    return(
        <li>
            <img src={img} alt={label} />
            <span>{label}</span>
        </li>
    )
}

DrawerItem.propTypes = {
    img: PropTypes.string,
    label: PropTypes.string,
}