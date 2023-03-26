import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <a
            className="footer__school"
            href="https://rs.school/"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            className="footer__github"
            href="https://github.com/kanoplich"
            target="_blank"
            rel="noreferrer"
          ></a>
          <span className="footer__year">2023</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
