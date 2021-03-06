import Gif from "../models/Gif";

import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  return (
    <li className="Result">
      <p>{gif.title}</p>
      <img src={gif.images.original.url} alt="gif" />
      <div className="link">
        <a href={gif.url}>Link to Giphy</a>
      </div>
    </li>
  );
};

export default Result;
