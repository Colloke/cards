import React, {useState} from 'react';
import styles from '@/styles/Home.module.css'
import { cardData } from './cardData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Cards = ({ slides }: { slides:any }) => {
  const [current, setCurrent] = useState(0)
  const length = cardData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(cardData) || cardData.length <= 0) {
    return null;
  }

   return (
    <section className={styles.container}>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    {cardData.map((card, index) => {
      return (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
          <img src={card.image} alt='Card 1' className={styles.card} />
          )}
        </div>
      )
    })}
    </section>
   )
}

export default Cards;