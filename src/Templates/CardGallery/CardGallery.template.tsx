import classNames from "classnames";
import { useState } from "react";

type props = { cards: Array<card> };

type card = {
  assets?: {
    gameAbsolutePath: string;
  };
  cardCode: string;
  name: string;
  cost: number;
  count: number;
};

export const CardGalleryTemplate = ({ cards }: props) => {
  const [hovered, setHovered] = useState<string>("");
  const [deck, setDeck] = useState<card[]>([]);
  const [deckCount, setDeckCount] = useState<number>(0);
  console.log(deck);

  const addToDeck = (card: card) => {
    /* 
    if card exists in the deck
      check how many copies are in the deck
      if copies are less than 3 and more than 0 add
      else don't add more
    if card doesn't exist
      add card to deck 
    */
    const newCard = deck.find((c) => c.cardCode === card.cardCode);
    const index = deck.findIndex((object) => object.cardCode === card.cardCode);
    if (newCard) {
      if (newCard.count < 3 && newCard.count >= 0) {
        let newDeck = [...deck];
        newDeck[index] = { ...newCard, count: newCard.count + 1 };
        setDeck(newDeck);
        setDeckCount((count) => count + 1);
      } else {
        alert("You've reached the limit of this card type allowed in a deck");
      }
    } else {
      setDeck([
        ...deck,
        {
          name: card.name,
          cost: card.cost,
          cardCode: card.cardCode,
          count: 1,
        },
      ]);
      setDeckCount((count) => count + 1);
    }
  };
  return (
    <main className="grid sm:grid-cols-4">
      <section>
        <div>
          {deck.map((card) => {
            return (
              <div className="flex justify-between">
                <p>{card.name}</p>
                {/* <p>{card.cost}</p> */}
                <p>{card.count}</p>
              </div>
            );
          })}
          <p>{deckCount} / 40</p>
        </div>
      </section>
      <section className="grid sm:grid-cols-5 col-span-3">
        {cards?.map((card) => {
          return (
            <div>
              <img
                className={classNames({
                  "rounded border-2 border-red-900": hovered === card?.cardCode,
                })}
                src={card?.assets ? card?.assets?.gameAbsolutePath : ""}
                alt={card?.cardCode}
                key={card?.cardCode}
                onMouseEnter={() => setHovered(card?.cardCode)}
                onClick={() => addToDeck(card)}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};
