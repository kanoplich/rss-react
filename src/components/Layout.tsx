import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Layout extends Component {
  render() {
    const title = ['Home page', 'About page', 'Not found'];
    return (
      <>
        <header className="header">
          <div className="header__container container">
            <h1>{title[0]}</h1>
            <div className="header__link">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </header>
        <main className="container">
          <Outlet />
        </main>
      </>
    );
  }
}

export default Layout;
