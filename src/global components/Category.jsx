import PropTypes from 'prop-types'

export default function Category({name}) {

    return(
        <li>
            <a href="#">{name}</a>
        </li>
    )
}

Category.propTypes = {
    name: PropTypes.string
}