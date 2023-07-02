import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

import app from "../firebase.js";

// import axios from "axios";

const db = getFirestore(app);
async function getCards(db) {
  const cardsCol = collection(db, "cards");
  const cardsSnapShot = await getDocs(cardsCol);
  const cardsList = cardsSnapShot.docs.map((doc) => doc.data());
  return cardsList;
}

export const getCardsAPI = async () => {
  return getCards(db).then((res) => {
    return { data: res };
  });
  // return axios.get("http://localhost:4000").then((res) => {
  //   return res;
  // });
};
