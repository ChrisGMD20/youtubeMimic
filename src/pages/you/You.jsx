import signIn from "../../assets/SVGs/sign-in.svg";
import youPlaceHolder from "../../assets/SVGs/you-placeholder.svg"
import { youNavArray } from "../../assets/data/navArrays";

import TopBar from "../../global components/TopBar";
import Aside from "../../global components/Aside";


export default function You() {
  return (
    <>

      <div className="page-style">

        <TopBar />

        <div className="page-container">

          <Aside navArray={youNavArray} />
          <div className="main">

            <div className="you-content">

                <img src={youPlaceHolder} alt="you place holder" />

                <h1>Enjoy your favorite videos</h1>
                <p>Sign in to access videos that you&apos;ve liked or saved</p>

                <div>

                  <button id="sign-in" className="transparent-button">
                    <img src={signIn} alt="sign-out menu" /> <span>Sign in</span>
                  </button>
                </div>

            </div>

          </div>
          
        </div>


      </div>

    </>
  );
}








  



