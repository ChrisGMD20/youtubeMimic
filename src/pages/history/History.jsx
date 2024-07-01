import signIn from "../../assets/SVGs/sign-in.svg";
import historyPlaceHolder from "../../assets/SVGs/history-placeholder.svg"
import bin from "../../assets/SVGs/bin.svg"
import pause from "../../assets/SVGs/pause.svg"
import { historyNavArray } from "../../assets/data/navArrays";

import TopBar from "../../global components/TopBar";
import Aside from "../../global components/Aside";


export default function History() {
  return (
    <>

      <div className="page-style">

        <TopBar />

        <div className="page-container">

          <Aside navArray={historyNavArray} />
          <div className="main">

            <div className="history-content">

              <div className="first-section">
                <img src={historyPlaceHolder} alt="you place holder" />

                <h1>Keep track of what you watch</h1>
                <p>Watch history isn&apos;t viewable when signed out.<a href="#"> Learn more</a></p>

                <div>

                  <button id="sign-in" className="transparent-button">
                    <img src={signIn} alt="sign-out menu" /> <span>Sign in</span>
                  </button>
                </div>
              </div>
              <div className="second-section">
                <p><img src={bin} alt="bin" />Clear all watch history</p>
                <p><img src={pause} alt="pause" />Pause Watch history</p>
                <p><img src={bin} alt="bin" />Clear all search history</p>
                <p><img src={pause} alt="pause" />Pause search history</p>
              </div>

            </div>

          </div>
          
        </div>


      </div>

    </>
  );
}








  



