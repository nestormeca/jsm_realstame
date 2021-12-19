import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ffb676602bmsh9a5edc59c6f7e71p1fc1e2jsna0f8f8f58e67",
    },
  });
  return data;
};
