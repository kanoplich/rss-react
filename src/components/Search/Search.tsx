import React, { Component } from 'react';

type StateType = {
  searchValue: string;
};

class Search extends Component {
  state: StateType = {
    searchValue: '',
  };

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  componentDidMount() {
    if (localStorage.getItem('searchValue') !== null) {
      this.setState({ searchValue: localStorage.getItem('searchValue') });
    }
  }

  handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: value });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="search__wrapper">
        <input
          type="text"
          className="search"
          placeholder="search..."
          value={searchValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
