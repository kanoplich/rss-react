import React, { Component } from 'react';

type StateType = {
  searchValue: string;
};

class Search extends Component {
  state: StateType = {
    searchValue: '',
  };

  handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: value });
  };

  render() {
    const { searchValue } = this.state;
    console.log(searchValue);

    return (
      <div className="search__wrapper">
        <input
          type="search"
          className="search"
          placeholder="search..."
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
