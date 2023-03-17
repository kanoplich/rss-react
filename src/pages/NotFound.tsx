import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="not_found__wrapper">
        <div>Page not found</div>
        <p>Sorry, but the page you were looking for could not be found.</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NotFound;
