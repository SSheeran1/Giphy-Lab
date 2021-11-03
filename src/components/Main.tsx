import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getSearchedGif, getTrendingGif } from "../services/GiphyService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      getTrendingGif().then((response) => {
        setGifs(response.data);
      });
    } else {
      getSearchedGif(searchTerm).then((response) => {
        setGifs(response.data);
      });
    }
  }, [searchTerm]);

  return (
    <main className="Main">
      <SearchForm onSearch={setSearchTerm} />
      <ResultsList gifsArray={gifs} />
    </main>
  );
};

export default Main;
