import PropTypes from "prop-types";

export default function AsideNavLink({props, handleClick}) {


  return (
    <a href="#" onClick={()=>handleClick(props.alt)} >
      <img src={props.img} alt={props.alt} />
      <p>{props.text}</p>
    </a>
  );
}

AsideNavLink.propTypes = {
  props: PropTypes.object,
  img: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
