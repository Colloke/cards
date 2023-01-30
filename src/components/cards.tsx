import React, {useState} from 'react';
import styles from '@/styles/Home.module.css'
import { cardData } from './cardData';
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
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    <section className={styles.container}>
    {cardData.map((card, index) => {
      return (
        <div className={index === prev1 ? 'slide active' : 'slide'} key={index}>
          {index === prev1 && (
          <img src={card.image} alt='Card 1' className={`${styles.card} ${styles.card0}`} />
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div className={index === prev2 ? 'slide active' : 'slide'} key={index}>
          {index === prev2 && (
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
        <div className={index === next1 ? 'slide active' : 'slide'} key={index}>
          {index === next1 && (
          <img src={card.image} alt='Card 1' className={`${styles.card} ${styles.card3}`}/>
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div className={index === next2 ? 'slide active' : 'slide'} key={index}>
          {index === next2 && (
          <img src={card.image} alt='Card 1' className={`${styles.card} ${styles.card4}`}/>
          )}
        </div>
      )
    })}
    <div className={styles.text}>Ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit, temporibus necessitatibus possimus voluptatibus beatae dolorum voluptates esse optio labore nulla ad quis molestias fugit fuga iure sint odit ex.</div>
    </section>
    </>
   )
}

{/* 

          TO-DO
        1: Make Gif animation only play when card is active
        2: Fix Mobile
        3: Add proper text to cards
        4: add animation to text
*/}

export default Cards;