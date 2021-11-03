import Gif from "../models/Gif";

import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifsArray: Gif[];
}

const ResultsList = ({ gifsArray }: Props) => {
  return (
    <ol className="ResultsList">
      <h2>Results</h2>

      {gifsArray.map((gif) => (
        <Result gif={gif} key={gif.id} />
      ))}
    </ol>
  );
};

export default ResultsList;
