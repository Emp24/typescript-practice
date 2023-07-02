import { useContext, useEffect } from "react";

import { CardGalleryTemplate } from "../../Templates/CardGallery/CardGallery.template";
import { CardsContext } from "../../Contexts/CardsContext";

const CardGalleryPage = () => {
  const { cards, getCards } = useContext(CardsContext);
  useEffect(() => {
    getCards();
  }, [getCards]);

  return <CardGalleryTemplate cards={cards} />;
};

export default CardGalleryPage;
