import signIn from "../../assets/SVGs/sign-in.svg";
import subscriptionsPlaceholder from "../../assets/SVGs/subscriptions-placeholder.svg"
import { subscriptionsNavArray } from "../../assets/data/navArrays";

import TopBar from "../../global components/TopBar";
import Aside from "../../global components/Aside";


export default function Subscriptions() {
  return (
    <>

      <div className="page-style">

        <TopBar />

        <div className="page-container">

          <Aside navArray={subscriptionsNavArray} />
          <div className="main">

            <div className="subscriptions-content">

                <img src={subscriptionsPlaceholder} alt="you place holder" />

                <h1>Don&apos;t miss new videos</h1>
                <p>Sign in to see updates from your favorite YouTube channels</p>

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








  



