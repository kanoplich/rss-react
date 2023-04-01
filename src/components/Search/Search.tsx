import React, { useEffect, useRef, useState } from 'react';

const Search = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
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

  return (
    <div className="search__wrapper">
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={searchValue}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
