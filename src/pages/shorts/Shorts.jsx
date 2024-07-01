
import { shorts } from "../../assets/data/shorts.js";
import { shortsNavArray } from "../../assets/data/navArrays";

import TopBar from "../../global components/TopBar";
import HomePageContextProvider from "../home/store/home-page-context";
import Aside from "../../global components/Aside";
import CategoryNav from "../../global components/CategoryNav.jsx";
import ContentShorts from "../../global components/ContentShorts"



export default function Shorts() {
  return (
    <>
      <HomePageContextProvider>

      <div className="page-style">

        <TopBar />

        <div className="page-container">

          <Aside navArray={shortsNavArray} />
          
          <div className="main">

            <CategoryNav />

            <div className="home-content">

              <ContentShorts shorts={shorts} />
              <ContentShorts shorts={shorts} />


            </div>

          </div>
          
        </div>

      </div>

      </HomePageContextProvider>
    </>
  );
}



