
import { useContext } from "react";

import TopBar from "../../global components/TopBar";
import Search_CategoryNav from "./components/Search_CategoryNav";
import Search_ContentVideos from './components/Search_ContentVideos';
import ContentShorts from "../../global components/ContentShorts"
import { GlobalContext } from "../../global store/global-context";



export default function Search() {

  const {searchResults} = useContext(GlobalContext)

  return (
    <>

      <div className="page-style">

        <TopBar />

        <div className="page-container">
          
          <div className="main search-main">
            
            <Search_CategoryNav />

            <div className="home-content search-content">
              
              {(searchResults.videos.length>0) ?
                <>
                  <Search_ContentVideos videos={searchResults.videos}/>
                  {searchResults.shorts.length>0 ?
                    <ContentShorts shorts={searchResults.shorts} />
                    : undefined
                  }
                </>
                :
                <p>Sorry, no results found</p>
              }
            </div>

          </div>
          
        </div>

      </div>

    </>
  );
}


