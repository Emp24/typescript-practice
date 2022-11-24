import "./App.css";

import CardsContextProvider from "./Contexts/CardsContext";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <CardsContextProvider>
      <RouterProvider router={router} />{" "}
    </CardsContextProvider>
  );
}

export default App;
