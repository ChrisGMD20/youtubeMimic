
import { createContext } from "react";

import PropTypes from "prop-types";


export const HomePageContext = createContext({

});

export default function HomePageContextProvider({ children }) {



  const ctxValue = {

  };


  return (
    <HomePageContext.Provider value={ctxValue}>
      {children}
    </HomePageContext.Provider>
  );
}

HomePageContextProvider.propTypes = {
  children: PropTypes.object,
};
