// mini contextApi to open or close the menu bar in pageNav and homepage pages

import { createContext, useContext, useState } from "react";

const openOrCloseContext = createContext();

function OpenOrCloseProvider({ children }) {
  // for close or open navbar in  pageNav and homepage pages
  const [isOpen, setIsOpen] = useState(false);
  return (
    <openOrCloseContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </openOrCloseContext.Provider>
  );
}

// hook to use this cotext
function useOpenOrClose() {
  const context = useContext(openOrCloseContext);
  if (context === undefined)
    throw new Error(
      "The openOrCloseContext use outside of the open orCloseProvider!"
    );
  return context;
}

export { OpenOrCloseProvider, useOpenOrClose };
