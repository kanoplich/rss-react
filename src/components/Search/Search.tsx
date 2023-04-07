import React, { useEffect, useRef, useState } from 'react';
import { FetchData } from 'types';

type PropsType = {
  getData: (data: FetchData) => void;
};

const Search = ({ getData }: PropsType) => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [query] = useState(localStorage.getItem('searchValue') || '');
  const searchRef = useRef<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    fetchData(query);
  }, [query]);

  useEffect(() => {
    return () => localStorage.setItem('searchValue', searchRef.current || '');
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData(searchValue);
  };

  const fetchData = (query: string) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${query}`)
      .then((response) => response.json())
      .then((data: FetchData) => getData(data));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="search__wrapper">
        <input
          type="text"
          className="search"
          placeholder="search..."
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
        <button className="button">search</button>
      </div>
    </form>
  );
};

export default Search;
