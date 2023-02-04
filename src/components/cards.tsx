import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { cardData } from "./cardData";
import { textData } from "./cardData";
import classnames from "classnames";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const calculateVisibleCardArray = (
  cardData: any[],
  selectedIndex: number
): any[] => {
  const leftMostCard = selectedIndex - 2;
  const rightMostCard = selectedIndex + 2;
  const visibleCardArray = [];
  for (let i = leftMostCard; i <= rightMostCard; i++) {
    visibleCardArray.push(cardData.at(i % cardData.length));
  }
  console.log(visibleCardArray);
  return visibleCardArray;
};

const Cards = ({ slides }: { slides: any }) => {
  const [current, setCurrent] = useState(2);
  const length = cardData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(cardData) || cardData.length <= 0) {
    return null;
  }

  const visibleCards = calculateVisibleCardArray(cardData, current);

  return (
    <>
      <FaArrowAltCircleLeft
        id="leftArrow"
        className={styles.leftarrow}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        id="rightArrow"
        className={styles.rightarrow}
        onClick={nextSlide}
      />
      <section className={styles.container}>
        {visibleCards.map((card, index) => {
          return (
            <img
              key={`Card-${card.id}`}
              src={index !== 2 ? card.back : card.image}
              alt={`Card ${index}`}
              className={classnames(styles.card, styles[`card${index}`])}
            />
          );
        })}

        {textData.map((text, index) => {
          return (
            <div
              id="text"
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div id="text" className={`${styles.text} ${styles.fadeIn}`}>
                  {text.text}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* {cardData.map((card, index) => {
        return (
          <div
            id="Card_6"
            className={index === offScreenCard ? "slide active" : "slide"}
            key={index}
          >
            {index === offScreenCard && (
              <div className={styles.card}>
                <Image
                  src={card.image}
                  alt="Card 6"
                  className={`${styles.offScreenCard}`}
                />
              </div>
            )}
          </div>
        );
      })} */}
    </>
  );
};

export default Cards;

{
  /* 

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


*/
}
