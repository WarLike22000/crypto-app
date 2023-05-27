import React from "react";
//context
import TopListContextProvider from "./context/TopListContextProvider.jsx";

//layout
import Home from "./layout/Home.jsx";

function App() {

  return (
    <TopListContextProvider>
      <Home />
    </TopListContextProvider>
  )
}

export default App