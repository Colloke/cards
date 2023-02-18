import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
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
  return visibleCardArray;
};

const Cards = ({ slides }: { slides: any }) => {
  const [current, setCurrent] = useState(2);
  const length = cardData.length;

  const nextSlide = () => {
    // Switch all the cards up one
    setCurrent(current === length - 1 ? 0 : current + 1);
    // Handle the card flip direction
    document.documentElement.style.setProperty("--flipDirection", "180deg");
  };

  const prevSlide = () => {
    // Switch all the cards down one
    setCurrent(current === 0 ? length - 1 : current - 1);
    // Handle the card flip direction
    document.documentElement.style.setProperty("--flipDirection", "180deg");
  };

  if (!Array.isArray(cardData) || cardData.length <= 0) {
    return null;
  }

  const visibleCards = calculateVisibleCardArray(cardData, current);

  return (
    <>
      <section className={styles.container}>
        <FaArrowAltCircleLeft
          id="leftArrow"
          className={classnames(styles.arrow, styles.leftarrow)}
          onClick={nextSlide}
        />
        <FaArrowAltCircleRight
          id="rightArrow"
          className={classnames(styles.arrow, styles.rightarrow)}
          onClick={prevSlide}
        />

        {/* 
     
        Card #2 is the only card that needs to have the front and back rendered.
        When the button is pressed card #2 needs to first show the back image and then
        flip to the front. 

        I think that the problem is the with the src of the card. 
        I think that there needs to be a larger if statment 
        that is then passed into the src as a variable instead of handling the
        if function within the src itself.

      */}

        <div className={styles.cardContainer}>
          {visibleCards.map((card, index) => {
            return (
              <div
                key={`Card-${card.id}`}
                className={classnames(
                  styles.card,
                  {
                    [styles.flipCard]: index === 2,
                  },
                  styles[`card${index}`]
                )}
              >
                <Image
                  src={card.back}
                  alt={`Card ${index}`}
                  width="352"
                  height="493"
                  className={styles.cardBack}
                />
                <Image
                  src={card.image}
                  alt={`Card ${index}`}
                  width="352"
                  height="493"
                  className={styles.cardFront}
                />
              </div>
            );
          })}
        </div>

        {textData.map((text, index) => {
          return (
            <div
              id="text"
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div id="text" className={styles.text}>
                  {text.text}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Cards;
