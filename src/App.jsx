import "./index.css";
import Home from "./pages/home//Home";
import Shorts from "./pages/shorts/Shorts";
import Subscriptions from "./pages/subscriptions/Subscriptions"
import You from "./pages/you/You"
import History from "./pages/history/History"
import Search from "./pages/search/Search";

import { useContext } from "react";

import { GlobalContext } from "./global store/global-context";
import Drawer from "./global components/Drawer";

function App() {

  const {openedPage, drawerHidden} = useContext(GlobalContext)

  return (
    <div className="page">

      {!drawerHidden && <Drawer />}

      {
        openedPage.home && <Home />
        ||
        openedPage.shorts && <Shorts />
        ||
        openedPage.subscriptions && <Subscriptions />
        ||
        openedPage.you && <You />
        ||
        openedPage.history && <History />
        ||
        openedPage.search && <Search />
      }

    </div>
  );
}

export default App;
