import React, { Component } from 'react';
import styles from './Cards.module.css' ;
import Card from './Card.js' ;

import iphone1 from '../images/iPhone14-1.jpg' ;
import iphone2 from '../images/iPhone14-2.jpg' ;
import iphone3 from '../images/iPhone14-3.jpg' ;
import iphone4 from '../images/iPhone14.jpg' ;

export default class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={iphone1} name="Iphone 14" price="500$" />
        <Card image={iphone2} name="Iphone 14 pro" price="830$" />
        <Card image={iphone3} name="Iphone 14 pro max" price="950$" />
        <Card image={iphone4} name="Iphone 14 plus" price="690$" />
      </div>
    )
  }
}
