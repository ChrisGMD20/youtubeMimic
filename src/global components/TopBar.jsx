import menu from "../assets/SVGs/menu.svg";
import youtubeLogo from "../assets/SVGs/youtube-logo.svg";
import search from "../assets/SVGs/search.svg";
import voiceSearch from "../assets/SVGs/voice-search.svg";
import dots from "../assets/SVGs/dots.svg";
import signIn from "../assets/SVGs/sign-in.svg";
import clear from "../assets/SVGs/clear.svg";

import { useContext, useState } from "react";

import { GlobalContext } from "../global store/global-context";
import Settings from "./Settings";
import SettingsContextProvider from "../global store/settings-context";

export default function TopBar() {
  const {setDrawerHidden, inputRef, updateOpenedPage, handleSearch, inputValue, setInputValue } =
    useContext(GlobalContext);


  const [isFocused, setIsFocused] = useState(false);
  const [settingsHidden, setSettingsHidden] = useState(true);

  function clearInput() {
    inputRef.current.value = "";
    setInputValue("")
  }

  return (
    <div className="top-bar">
      <div className="menu">
        <button onClick={()=>setDrawerHidden(false)} className="transparent-button">
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

      <div className="search">
        <div className="search-bar">
          <i hidden={isFocused ? false : true} id="search-icon">
            <img src={search} alt="" />
          </i>
          {/* <button className='default-button'><img src={search} alt="search icon" /></button> */}
          <input
            ref={inputRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            onChange={()=>setInputValue(inputRef.current.value)}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            defaultValue={inputValue}
            type="text"
            placeholder="Search"
          />
          <button
            onClick={handleSearch}
            className="default-button"
          >
            <img src={search} alt="search icon" />
          </button>
        </div>

        <div id="voice-search">
          <button className="default-button">
            <img src={voiceSearch} alt="" />
          </button>
        </div>

        <button
          hidden={inputValue ? false : true}
          className="transparent-button"
          id="clear-icon"
          onClick={clearInput}
        >
          <img src={clear} alt="clear" />
        </button>
      </div>

      <div className="top-bar-button-group">
        {/* <button className='transparent-button'><img src={uploadVideo} alt="upload video" /></button>
                <button className='transparent-button'><img src={notifications} alt="notifications" /></button>
                <button id='add-account-button' className='transparent-button'><span>+</span></button> */}

        <button
          onBlur={() => setSettingsHidden(true)}
          onClick={() => setSettingsHidden((prev) => !prev)}
          id="menu"
          className="transparent-button"
        >
          <img src={dots} alt="sign-out menu" />
        </button>
        <button id="sign-in" className="transparent-button">
          <img src={signIn} alt="sign-out menu" /> <span>Sign in</span>
        </button>
      </div>

      {!settingsHidden && (
        <SettingsContextProvider>
          <Settings></Settings>
        </SettingsContextProvider>
      )}
    </div>
  );
}
