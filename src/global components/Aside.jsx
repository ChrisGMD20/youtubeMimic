import { useContext } from "react";
import PropTypes from 'prop-types'

import AsideNavLink from "./AsideNavLink";
import { GlobalContext } from "../global store/global-context";

export default function Aside({navArray}) {

  const {updateOpenedPage} = useContext(GlobalContext)

  return (
    <div className="aside-nav">
      {navArray.map((navItem) => (
        <AsideNavLink
          key={navItem.alt}
          props={navItem}
          handleClick={updateOpenedPage}
        />
      ))}
    </div>
  );
}


Aside.propTypes = {
  navArray: PropTypes.array
}