import React, {useState} from 'react';
import styles from '@/styles/Home.module.css'
import { cardData } from './cardData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Cards = ({ slides }: { slides:any }) => {
  const [prev, setPrev] = useState(4)
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(1)
  const length = cardData.length

  const nextSlide = () => {
    setPrev(prev === length - 1 ? 0 : prev + 1)
    setCurrent(current === length - 1 ? 0 : current + 1)
    setNext(next === length - 1 ? 0 : next + 1)
  }

  const prevSlide = () => {
    setPrev(prev === 0 ? length - 1 : prev - 1)
    setCurrent(current === 0 ? length - 1 : current - 1)
    setNext(next === 0 ? length - 1 : next - 1)
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
        <div className={index === prev ? 'slide active' : 'slide'} key={index}>
          {index === prev && (
          <img src={card.image} alt='Card 1' className={`${styles.card} ${styles.card1}`} />
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
          <img src={card.image} alt='Card 1'className={`${styles.card} ${styles.card2}`} />
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div className={index === next ? 'slide active' : 'slide'} key={index}>
          {index === next && (
          <img src={card.image} alt='Card 1' className={`${styles.card} ${styles.card3}`}/>
          )}
        </div>
      )
    })}
    </section>
   )
}

export default Cards;