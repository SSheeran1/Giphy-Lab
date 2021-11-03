import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchForm = ({ onSearch }: Props) => {
  const [title, setTitle] = useState("");

  const submissionHandler = (e: FormEvent): void => {
    e.preventDefault();
    onSearch(title);
  };

  return (
    <form className="SearchForm" onSubmit={submissionHandler}>
      <label htmlFor="search">Search for a GIF</label>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
