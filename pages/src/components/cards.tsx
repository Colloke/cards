import React, {useState} from 'react';
import styles from '@/styles/Home.module.css'
import { cardData } from './cardData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Cards = ({ slides }: { slides:any }) => {
const [current, setCurrent] = useState(0)
const length = cardData.length



   return (
    <section className="cards">
      <FaArrowAltCircleLeft className="left-arrow" />
      <FaArrowAltCircleRight className="right-arrow" />
    {cardData.map((card, index) => {
      return (
      <img src={card.image} alt='Card 1' className={styles.card} key={index} />
      )
    })}
    </section>
   )
}

export default Cards;