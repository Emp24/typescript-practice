import { createContext, useState } from "react";

import { getCardsAPI } from "../API/getCards";

export const CardsContext = createContext();

const CardsContextProvider = ({ children }) => {
  const [cards, setCards] = useState(null);

  const getCards = async () => {
    const res = await getCardsAPI();
    setCards(res?.data.slice(0, 10));
  };

  return (
    <CardsContext.Provider value={{ cards, getCards }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
