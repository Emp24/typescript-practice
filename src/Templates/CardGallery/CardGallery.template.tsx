import classNames from "classnames";
import { useState } from "react";

type props = { cards: Array<card> };

type card = {
  assets?: Array<{ gameAbsolutePath: string }>;
  cardCode: string;
  name: string;
  cost: number;
  count?: number;
};

export const CardGalleryTemplate = ({ cards }: props) => {
  const [hovered, setHovered] = useState<string>("");
  const [deck, setDeck] = useState<card[]>([]);

  const addToDeck = (data: card) => {
    //check if card exists in the deck
    // check how many copies are in the deck
    // if copies are less than 3 and more than 0 add
    //else don't add more
    setDeck([
      ...deck,
      { name: data.name, cost: data.cost, cardCode: data.cardCode },
    ]);
  };
  return (
    <main className="grid sm:grid-cols-4">
      <section>
        <div>
          {deck.map((card) => {
            return (
              <div className="flex justify-between">
                <p>{card.name}</p>
                <p>{card.cost}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="grid sm:grid-cols-5 col-span-3">
        {cards?.map((card) => {
          return (
            <img
              className={classNames({
                "rounded border-2 border-red-900": hovered === card?.cardCode,
              })}
              src={card?.assets && card?.assets[0]?.gameAbsolutePath}
              alt={card?.cardCode}
              key={card?.cardCode}
              onMouseEnter={() => setHovered(card?.cardCode)}
              onClick={() => addToDeck(card)}
            />
          );
        })}
      </section>
    </main>
  );
};
