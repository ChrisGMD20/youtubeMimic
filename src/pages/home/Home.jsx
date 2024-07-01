import { videos } from "../../assets/data/videos.js"
import { shorts } from "../../assets/data/shorts.js";
import { homeNavArray } from "../../assets/data/navArrays";

import TopBar from "../../global components/TopBar";
import HomePageContextProvider from "./store/home-page-context";
import Aside from "../../global components/Aside";
import CategoryNav from "../../global components/CategoryNav.jsx";
import ContentVideos from "../../global components/ContentVideos"
import ContentShorts from "../../global components/ContentShorts"



export default function Home() {
  return (
    <>
      <HomePageContextProvider>

      <div className="page-style">

        <TopBar />

        <div className="page-container">

          <Aside navArray={homeNavArray} />
          
          <div className="main">

            <CategoryNav />

            <div className="home-content">
              <ContentVideos videos={videos}/>

              <ContentShorts shorts={shorts} />

              <ContentVideos videos={videos}/>
            </div>

          </div>
          
        </div>

      </div>

      </HomePageContextProvider>
    </>
  );
}


