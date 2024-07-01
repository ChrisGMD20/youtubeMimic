import menu from "../assets/SVGs/menu.svg";
import youtubeLogo from "../assets/SVGs/youtube-logo.svg";

import { createPortal } from "react-dom";
import { useContext, useState } from "react";

import { GlobalContext } from "../global store/global-context";

export default function Drawer() {
  const { updateOpenedPage, setDrawerHidden } = useContext(GlobalContext);
  const [animation, setAnimation] = useState('slide-in')

  
  return createPortal(
    <div className="glass-window">
      <div className={"drawer " + animation}>
        <div className="menu">
          <button onClick={()=>{
                        setAnimation('slide-out')
                        const timeOut = setTimeout(()=>{
                            clearTimeout(timeOut)
                            setDrawerHidden(true)
                        },1000)
          }} className="transparent-button">
            <img src={menu} alt="menu" height="24px" width="24px" />
          </button>
          <span>
            <img
              onClick={() => updateOpenedPage("home")}
              src={youtubeLogo}
              alt="youtube logo"
              height="20px"
              width="90px"
            />
          </span>
        </div>
        <div className="drawer-content">
          <div className="section">
            
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#drawer")
  );
}
