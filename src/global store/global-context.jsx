import { createContext, useState, useRef } from "react";
import PropTypes from 'prop-types'
import { videos } from "../assets/data/videos";
import { shorts } from "../assets/data/shorts";


export const GlobalContext = createContext({
    openedPage: null,
    updateOpenedPage: null,
    inputRef: null,
    handleSearch: null,
    searchResults: null,
    inputValue: null,
    setInputValue: null,
    drawerHidden: null,
    setDrawerHidden: null,
})

export default function GlobalContextProvider({children}) {

    const [inputValue, setInputValue] = useState();
    const [openedPage, setOpenedPage] = useState({
        home: true,
        shorts: false,
        subscriptions: false,
        you: false,
        history: false,
        search: false
    })

    const [searchResults, setSearchResults] = useState({
        videos: [],
        shorts: []
    })
    const [ drawerHidden, setDrawerHidden] = useState(true)

    const inputRef = useRef();

      function resetObjectState(object){
        let update = {}
        Object.keys(object).map(key=> update[key]=false)
        return update
      }
      function updateOpenedPage(key) {
        const reset = resetObjectState(openedPage);
        setOpenedPage(() => ({ ...reset, [key]: true }));
      }

      function handleSearch() {
        const searchItem = inputRef.current.value.toLowerCase()
        if(searchItem){
            setSearchResults({videos:[], shorts:[]})
            const videosResults = videos.filter(video=>video.videoTitle.toLowerCase().includes(searchItem) || video.channelName.toLowerCase().includes(searchItem))
            const shortsResults = shorts.filter(short=>short.shortTitle.toLowerCase().includes(searchItem))
            setSearchResults({videos:videosResults, shorts:shortsResults})
            updateOpenedPage('search')
        }
      }

    const ctxValues = {
        openedPage,
        updateOpenedPage,
        inputRef,
        handleSearch,
        searchResults,
        inputValue,
        setInputValue,
        drawerHidden,
        setDrawerHidden,
    }

    return(
        <GlobalContext.Provider value={ctxValues}>
            {children}
        </GlobalContext.Provider>
    )
}

GlobalContextProvider.propTypes = {
    children: PropTypes.object
}