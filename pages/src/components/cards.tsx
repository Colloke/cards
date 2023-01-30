import React from 'react';
import styles from '@/styles/Home.module.css'
import { cardData } from './cardData';

const Cards = () => {
   return (
    <>
    {cardData.map((card, index) => {
      return (
      <img src={card.image} alt='Card 1' className={styles.card} key={index} />
      )
    })}
    </>
   )
}

export default Cards;