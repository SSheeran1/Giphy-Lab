import axios from "axios";
import GiphyResponse from "../models/GiphyResponse";

const key = process.env.REACT_APP_GIPHY_KEY || "";

// function for trending

// function for search term
export const getTrendingGif = (): Promise<GiphyResponse> => {
  return axios
    .get("http://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getSearchedGif = (searchTerm: string): Promise<GiphyResponse> => {
  return axios
    .get("http://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: key,
        q: searchTerm,
      },
    })
    .then((response) => {
      console.log("test");
      return response.data;
    });
};
