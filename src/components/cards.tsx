import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { cardData } from "./cardData";
import { textData } from "./cardData";
import classnames from "classnames";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import CardPlaceholder from '../card_images/card_back.jpg'

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

        {visibleCards.map((card, index) => {
          return (
            <Image
              key={`Card-${card.id}`}
              src={index !== 2 ? card.back : card.gif}
              alt={`Card ${index}`}
              width='280'
              height='420'
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