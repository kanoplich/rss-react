import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { modalSlice } from '../../store/reduсers/ModalSlice';

const Search = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.modalReducer.query);
  const { query } = modalSlice.actions;
  const [searchValue, setSearchValue] = useState(search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(query(searchValue));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="search__wrapper">
        <input
          type="text"
          className="search"
          placeholder="search..."
          value={searchValue || ''}
          onChange={(e) => handleChange(e)}
        />
        <button className="button">search</button>
      </div>
    </form>
  );
};

export default Search;
