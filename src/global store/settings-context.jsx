import { createContext, useRef, useState } from "react";
import PropTypes from 'prop-types'

export const SettingsContext = createContext({
    selectedSetting: '',
    settingRef: '',
    handleSettingSelection: '',
    handleSettingsOutOfFocus: ''
})

export default function SettingsContextProvider({children}) {

    const settingRef = useRef()

    const [selectedSetting, setSelectedSetting] = useState('main')

    function handleSettingSelection(ref){
        if(ref.id==="appearance"){
            setSelectedSetting("appearance")
        } else if(ref.id==="language"){
            setSelectedSetting("language")
        } else if(ref.id==="restricted"){
            setSelectedSetting("restricted")
        } else if(ref.id==="location"){
            setSelectedSetting("location")
        } else if(ref.id==="back"){
            setSelectedSetting("main")
        }
    }


    const ctxValue = {
        selectedSetting,
        settingRef,
        handleSettingSelection,
    }

    return(
        <SettingsContext.Provider value={ctxValue}>
            {children}
        </SettingsContext.Provider>
    )
}

SettingsContextProvider.propTypes = {
    children: PropTypes.object
}