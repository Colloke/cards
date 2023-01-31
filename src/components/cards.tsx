import React, { useState } from 'react';
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
  const [offScreenCard, setOffScreenCard] = useState(5)
  const length = cardData.length

  const nextSlide = () => {
    setPrevOne(prev1 === length - 1 ? 0 : prev1 + 1)
    setPrevTwo(prev2 === length - 1 ? 0 : prev2 + 1)
    setCurrent(current === length - 1 ? 0 : current + 1)
    setNextOne(next1 === length - 1 ? 0 : next1 + 1)
    setNextTwo(next2 === length - 1 ? 0 : next2 + 1)
    setOffScreenCard(offScreenCard === length - 1 ? 0 : offScreenCard + 1)
  }

  const prevSlide = () => {
    setPrevOne(prev1 === 0 ? length - 1 : prev1 - 1)
    setPrevTwo(prev2 === 0 ? length - 1 : prev2 - 1)
    setCurrent(current === 0 ? length - 1 : current - 1)
    setNextOne(next1 === 0 ? length - 1 : next1 - 1)
    setNextTwo(next2 === 0 ? length - 1 : next2 - 1)
    setOffScreenCard(offScreenCard === 0 ? length - 1 : offScreenCard - 1)
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
          <div className={styles.card}>
          <img src={card.back} alt='Card 1' className={`${styles.card} ${styles.front} ${styles.card0}`} />
          </div>
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div id="Card_2" className={index === prev2 ? 'slide active' : 'slide'} key={index}>
          {index === prev2 && (
          <div className={styles.card}>
          <img src={card.back} alt='Card 2' className={`${styles.card} ${styles.prev2} ${styles.card1}`} />
          </div>
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div id="Card_3" className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
          <div className={styles.mainCard}>
          <img src={card.gif} alt='Card 3'className={`${styles.current} ${styles.card2}`} />
          </div>
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div id="Card_4" className={index === next1 ? 'slide active' : 'slide'} key={index}>
          {index === next1 && (
          <div className={styles.card}>
          <img src={card.back} alt='Card 4' className={`${styles.next1} ${styles.card3}`}/>
          </div>
          )}
        </div>
      )
    })}

    {cardData.map((card, index) => {
      return (
        <div id="Card_5" className={index === next2 ? 'slide active' : 'slide'} key={index}>
          {index === next2 && (
          <div className={styles.card}>
          <img src={card.back} alt='Card 5' className={`${styles.next2} ${styles.card4}`}/>
          </div>
          )}
        </div>
      )
    })}

    {textData.map((text, index) => {
      return (
        <div id="text" className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
          <div id="text" className={`${styles.text} ${styles.fadeIn}`}>
            {text.text}
          </div>
          )}
        </div>
      )
    })
    }

    </section>

    {cardData.map((card, index) => {
      return (
        <div id="Card_6" className={index === offScreenCard ? 'slide active' : 'slide'} key={index}>
          {index === offScreenCard && (
          <div className={styles.card}>
          <img src={card.image} alt='Card 6' className={`${styles.offScreenCard}`}/>
          </div>
          )}
        </div>
      )
    })}
    </>
   )
}

export default Cards;

{/* 

Since the design of it is fanned out like a hand of cards, we should investigate

  - Apply transform-origin to the bottom of the card and use rotateY around the new origin to rotate it around the “hand”
  - All cards not in carousel are rendered offscreen and moved into view as sorted through probably with transformX
  - Clicking Right or Left will move the card and rotate it over
  - On mobile or tablet, swiping should move the carousel over to the right or left
  - A̶f̶t̶e̶r̶ ̶t̶h̶e̶ ̶c̶a̶r̶d̶ ̶f̶i̶n̶i̶s̶h̶e̶s̶ ̶m̶o̶v̶i̶n̶g̶ ̶i̶n̶t̶o̶ ̶t̶h̶e̶ ̶c̶e̶n̶t̶e̶r̶ ̶t̶r̶i̶g̶g̶e̶r̶ ̶a̶n̶ ̶a̶n̶i̶m̶a̶t̶e̶d̶ ̶g̶i̶f̶ ̶o̶r̶ ̶v̶i̶d̶e̶o̶ ̶t̶o̶ ̶p̶l̶a̶y̶ ̶i̶n̶ ̶t̶h̶e̶ ̶c̶e̶n̶t̶e̶r̶ ̶s̶c̶r̶e̶e̶n̶ ̶(̶s̶h̶o̶u̶l̶d̶ ̶b̶e̶ ̶a̶b̶l̶e̶ ̶t̶o̶ ̶u̶s̶e̶ ̶o̶n̶T̶r̶a̶n̶s̶i̶t̶i̶o̶n̶E̶n̶d̶)̶
  - Trigger sound as the card moves into the center
  - E̶a̶c̶h̶ ̶p̶i̶e̶c̶e̶ ̶o̶f̶ ̶t̶h̶e̶ ̶c̶a̶r̶d̶ ̶s̶h̶o̶u̶l̶d̶ ̶c̶o̶m̶e̶ ̶f̶r̶o̶m̶ ̶a̶ ̶d̶a̶t̶a̶ ̶s̶t̶o̶r̶e̶,̶ ̶t̶̵̶h̶̵̶e̶̵̶ ̶̵̶i̶̵̶m̶̵̶a̶̵̶g̶̵̶e̶̵̶ ̶a̶n̶d̶ ̶t̶h̶e̶ ̶d̶e̶s̶c̶r̶i̶p̶t̶i̶o̶n̶
  - The under-card description should be a <caption tag (for accessibility purposes)
  - U̶n̶d̶e̶r̶-̶c̶a̶r̶d̶ ̶d̶e̶s̶c̶r̶i̶p̶t̶i̶o̶n̶s̶ ̶s̶h̶o̶u̶l̶d̶ ̶f̶a̶d̶e̶ ̶o̶u̶t̶ ̶o̶̵̶r̶̵̶ ̶̵̶i̶̵̶n̶̵̶ ̶a̶s̶ ̶t̶h̶e̶ ̶n̶e̶w̶ ̶c̶a̶r̶d̶ ̶m̶o̶v̶e̶s̶ ̶i̶n̶t̶o̶ ̶t̶h̶e̶ ̶c̶e̶n̶t̶r̶a̶l̶ ̶p̶o̶s̶i̶t̶i̶o̶n̶

Nice to have:
The new card from the left or right should slide in from the side of the screen as if the card is being dealt into the carousel or discarded.
Clicking on card will go full screen?


*/}