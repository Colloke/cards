import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { cardData } from "./cardData";
import { textData } from "./cardData";
import classnames from "classnames";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

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
    </>
  );
};

export default Cards;