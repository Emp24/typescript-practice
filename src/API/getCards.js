import axios from "axios";

export const getCardsAPI = async () => {
  return axios.get("http://localhost:4000").then((res) => {
    return res;
  });
};
