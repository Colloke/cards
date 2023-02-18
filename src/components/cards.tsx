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
    document.documentElement.style.setProperty('--flipDirection', '-180deg')
  };

  const prevSlide = () => {
    // Switch all the cards down one
    setCurrent(current === 0 ? length - 1 : current - 1);
    // Handle the card flip direction
    document.documentElement.style.setProperty('--flipDirection', '180deg');
  };

  if (!Array.isArray(cardData) || cardData.length <= 0) {
    return null;
  };

  const visibleCards = calculateVisibleCardArray(cardData, current);

  return (
    <>
      <section className={styles.container}>

        <FaArrowAltCircleLeft
          id="leftArrow"
          className={classnames(styles.arrow, styles.leftarrow)}
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          id="rightArrow"
          className={classnames(styles.arrow, styles.rightarrow)}
          onClick={nextSlide}
        />

      {/* This Map currently displays all the cards
          We need to display Card2 as a separate div with its own class
          maybe we can use a second map for this?
      
      */}

        <div className={styles.cardContainer}>
        {visibleCards.map((card, index) => {
          return (
            <Image
              key={`Card-${card.id}`}
              src={index !== 2 ? card.back : card.image}
              alt={`Card ${index}`}
              width='280'
              height='420'
              className={classnames(styles.card, styles[`card${index}`])}
            />
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