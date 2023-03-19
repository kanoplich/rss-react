import React, { Component } from 'react';
import { CardData } from '../Data/CardData';

type PropsType = {
  data: CardData;
};

class Card extends Component<PropsType> {
  render() {
    const { name, url, capacity, location, used, year } = this.props.data;
    return (
      <div className="card">
        <img src={url} alt={name} />
        <h2 className="card__name">{name}</h2>
        <table>
          <tbody>
            <tr>
              <td>Capacity:</td>
              <td>{capacity}</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>{location}</td>
            </tr>
            <tr>
              <td>First opened:</td>
              <td>{year}</td>
            </tr>
            <tr>
              <td>Used for:</td>
              <td>{used}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Card;
