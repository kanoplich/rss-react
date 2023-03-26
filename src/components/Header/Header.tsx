import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type StateType = {
  title: string;
};

class Header extends Component {
  state: StateType = {
    title: '',
  };

  componentDidMount() {
    this.handleClick();
  }

  handleClick = () => {
    this.setState(() => {
      let title = 'Not found page';
      if (window.location.pathname === '/') {
        title = 'Home page';
      } else if (window.location.pathname === '/about') {
        title = 'About page';
      } else if (window.location.pathname === '/form') {
        title = 'Form page';
      }
      return {
        title: title,
      };
    });
  };
  render() {
    const { title } = this.state;
    return (
      <header className="header">
        <div className="header__container container">
          <h1>{title}</h1>
          <div className="header__link">
            <Link to="/" onClick={this.handleClick}>
              Home
            </Link>
            <Link to="/about" onClick={this.handleClick}>
              About
            </Link>
            <Link to="/form" onClick={this.handleClick}>
              Form
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
