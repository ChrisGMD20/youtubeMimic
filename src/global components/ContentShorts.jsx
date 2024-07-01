import shortsLogo from "../assets/SVGs/shorts-logo.svg";

import PropTypes from 'prop-types'

import Short from "./Short.jsx";


export default function ContentShorts({shorts}) {




return (

        <div className="short-content">
            <h3>
                <img src={shortsLogo} alt="shorts logo" />
                <span>Shorts</span>
            </h3>     
            <div className="shorts">{
                shorts.map((short, key) => (
                    <Short key={short.shortTitle + key} props={short}/> ))  
                }
            </div>
        </div>  
)
}

ContentShorts.propTypes = {
    shorts: PropTypes.array
}



