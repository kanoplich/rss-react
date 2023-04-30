import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [title, setTitle] = useState('');

  const handleClick = (str: string) => {
    setTitle(str);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setTitle('Home page');
        break;
      case '/about':
        setTitle('About page');
        break;
      case '/form':
        setTitle('Form page');
        break;
      default:
        setTitle('Not found page');
        break;
    }
  }, []);

  return (
    <header className="header">
      <div className="header__container container">
        <h1>{title}</h1>
        <div className="header__link">
          <Link to="/" onClick={() => handleClick('Home page')}>
            Home
          </Link>
          <Link to="/about" onClick={() => handleClick('About page')}>
            About
          </Link>
          <Link to="/form" onClick={() => handleClick('Form page')}>
            Form
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
