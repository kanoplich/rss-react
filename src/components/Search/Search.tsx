import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { CardData, FetchData } from 'types';
import { fetchRequest } from './Search.service';

type PropsType = {
  getFetchData: (data: CardData[] | undefined) => void;
  setData: (data: CardData[] | undefined) => void;
  setIsPending: (active: boolean) => void;
};

const Search = ({ getFetchData, setData, setIsPending }: PropsType) => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [query, setQuery] = useState(localStorage.getItem('searchValue') || '');
  const searchRef = useRef<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => localStorage.setItem('searchValue', searchRef.current || '');
  }, []);

  useFetch(() => {
    fetchRequest(query).then((data: FetchData) => getFetchData(data.results));
  }, query);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query !== searchValue) {
      setData(undefined);
      setIsPending(true);
      setQuery(searchValue);
    }
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
