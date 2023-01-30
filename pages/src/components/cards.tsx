import React from 'react';
import styles from '@/styles/Home.module.css'
import { cardData } from './cardData';

const Cards = () => {
   return (
    <>
    {cardData.map((card, index) => {
      return (
        <>
        <img className={styles.card1} src={card.image} alt="Card 1"/>
        <img className={styles.card2} src={card.image} alt="Card 2"/>
        <img className={styles.card3} src={card.image} alt="Card 3"/>
        <img className={styles.card4} src={card.image} alt="Card 4"/>
        <img className={styles.card5} src={card.image} alt="Card 5"/>
        </>
      )
    })}
    </>
   )
}

export default Cards;