import { useContext, useEffect } from "react";

import { CardGalleryTemplate } from "../../Templates/CardGallery/CardGallery.template";
import { CardsContext } from "../../Contexts/CardsContext";

const CardGalleryPage = () => {
  const { cards, getCards } = useContext(CardsContext);
  useEffect(() => {
    getCards();
    //eslint-disable-next-line
  }, []);

  return <CardGalleryTemplate cards={cards} />;
};

export default CardGalleryPage;
