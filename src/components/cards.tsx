import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import { cardData } from './cardData';
import { textData } from './cardData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Cards = ({ slides }: { slides:any }) => {
  const [prev1, setPrevOne] = useState(0)
  const [prev2, setPrevTwo] = useState(1)
  const [current, setCurrent] = useState(2)
  const [next1, setNextOne] = useState(3)
  const [next2, setNextTwo] = useState(4)
  const length = cardData.length

  const nextSlide = () => {
    setPrevOne(prev1 === length - 1 ? 0 : prev1 + 1)
    setPrevTwo(prev2 === length - 1 ? 0 : prev2 + 1)
    setCurrent(current === length - 1 ? 0 : current + 1)
    setNextOne(next1 === length - 1 ? 0 : next1 + 1)
    setNextTwo(next2 === length - 1 ? 0 : next2 + 1)
  }
  const prevSlide = () => {
    setPrevOne(prev1 === 0 ? length - 1 : prev1 - 1)
    setPrevTwo(prev2 === 0 ? length - 1 : prev2 - 1)
    setCurrent(current === 0 ? length - 1 : current - 1)
    setNextOne(next1 === 0 ? length - 1 : next1 - 1)
    setNextTwo(next2 === 0 ? length - 1 : next2 - 1)
  }

  if (!Array.isArray(cardData) || cardData.length <= 0) {
    return null;
  }

   return (
    <>
    <FaArrowAltCircleLeft id='leftArrow' className={styles.leftarrow} onClick={prevSlide} />
    <FaArrowAltCircleRight id='rightArrow' className={styles.rightarrow} onClick={nextSlide} />
    <section className={styles.container}>
    {cardData.map((card, index) => {
      return (
        <div id="Card_1" className={index === prev1 ? 'slide active' : 'slide'} key={index}>
          {index === prev1 && (
          <img src={card.image} alt='Card 1' className={`${styles.card} ${styles.prev1} ${styles.card0}`} />
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div id="Card_2" className={index === prev2 ? 'slide active' : 'slide'} key={index}>
          {index === prev2 && (
          <img src={card.image} alt='Card 2' className={`${styles.card} ${styles.prev2} ${styles.card1}`} />
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div id="Card_3" className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
          <img src={card.gif} alt='Card 3'className={`${styles.card} ${styles.current} ${styles.card2}`} />
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div id="Card_4" className={index === next1 ? 'slide active' : 'slide'} key={index}>
          {index === next1 && (
          <img src={card.image} alt='Card 4' className={`${styles.card} ${styles.next1} ${styles.card3}`}/>
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div id="Card_5" className={index === next2 ? 'slide active' : 'slide'} key={index}>
          {index === next2 && (
          <img src={card.image} alt='Card 5' className={`${styles.card} ${styles.next2} ${styles.card4}`}/>
          )}
        </div>
      )
    })}

    {textData.map((text, index) => {
      return (
        <div id="text" className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
          <h1 id="text" className={`${styles.text} ${styles.fadeIn}`}>
            {text.text}
          </h1>
          )}
        </div>
      )
    })
    }

    </section>
    </>
   )
}

export default Cards;