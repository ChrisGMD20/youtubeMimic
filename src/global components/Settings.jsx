import appearance from '../assets/SVGs/appearance.svg'
import feedBack from '../assets/SVGs//feed-back.svg'
import help from '../assets/SVGs/help.svg'
import language from '../assets/SVGs/language.svg'
import location from '../assets/SVGs/location.svg'
import privacy from '../assets/SVGs/privacy.svg'
import restricted from '../assets/SVGs/restricted.svg'
import settings from '../assets/SVGs/settings.svg'
import shortcuts from '../assets/SVGs/shortcuts.svg'
import next from '../assets/SVGs/next.svg'
// import selected from '../assets/SVGs/selected.svg'
import back from '../assets/SVGs/back.svg'

import { useContext } from 'react'

import MenuBox from "./MenuBox"
import { createPortal } from 'react-dom'
import { SettingsContext } from '../global store/settings-context'
import {Setting} from './Setting'

export default function Settings() {

    const {selectedSetting, handleSettingSelection, settingRef} = useContext(SettingsContext)

    let display 

    if (selectedSetting==='main'){
        display = 
        <>
            <div className="section">
                <Setting ref={settingRef} id="privacy" img={privacy} imgDescription="privacy" setting="Your data in Youtube"/>
                <Setting ref={settingRef} clickHandler={handleSettingSelection} id="appearance" img={appearance} imgDescription="appearance" setting="Appearance: Device theme" next={next}/>
                <Setting ref={settingRef} clickHandler={handleSettingSelection} id="language" img={language} imgDescription="language" setting="Language: English" next={next}/>
                <Setting ref={settingRef} clickHandler={handleSettingSelection} id="restricted" img={restricted} imgDescription="restricted" setting="Restricted Mode: Off" next={next}/>
                <Setting ref={settingRef} clickHandler={handleSettingSelection} id="location" img={location} imgDescription="location" setting="Location: United States" next={next}/>
                <Setting ref={settingRef} clickHandler={handleSettingSelection} id="shortcuts" img={shortcuts} imgDescription="shortcuts" setting="Keyboard shortcuts"/>
            </div>
            <div className="top-bottom">
                <div className="section">
                    <Setting ref={settingRef} id="settings" img={settings} imgDescription="settings" setting="Settings"/>
                </div>
            </div>
            <div className='section'>
                <Setting ref={settingRef} img={help} imgDescription="help" setting="Help"/>
                <Setting ref={settingRef} img={feedBack} imgDescription="feedBack" setting="Send feedback"/>
            </div>
         </>
    } else if(selectedSetting==='appearance'){
        display = 
        <>
            <div className="bottom">
                <div className="section">
                    <Setting ref={settingRef} clickHandler={handleSettingSelection} id="back" img={back} imgDescription="back" setting="Appearance"/>
                </div>
                <div className="section">
                    <Setting ref={settingRef} id="device theme" img={back} imgDescription="device theme" setting="Use device theme"/>
                    <Setting ref={settingRef} id="dark theme"  imgDescription="dark theme" setting="Dark theme"/>
                    <Setting ref={settingRef} id="light theme"  imgDescription="light theme" setting="Light theme"/>
                </div>
            </div>
        </>
    }


    return(
        createPortal(
            <MenuBox>
                {display}
            </MenuBox>

    , document.querySelector('#settings'))
        )
}