import CardGalleryPage from "./Pages/CardGallery/CardGallery.page";
import DeckBuilderPage from "./Pages/DeckBuilder/DeckBuilder.page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <CardGalleryPage />,
    path: "/cards",
  },
  {
    element: <DeckBuilderPage />,
    path: "/deck-builder",
  },
]);
