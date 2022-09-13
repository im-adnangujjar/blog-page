import React from "react";
import styles from "../../../styles/Card.module.css";
import Link from "next/link";
import { shrinkText } from "../utils/shrinkText";
import Image from "next/image";

function Card({ cardData }) {
  return (
    <Link className={styles.move} href={`/blog/${cardData.id}`}>
    <div className={styles.display}>
        <img 
        className={styles.image}
          src={cardData.image}
          alt="image not found"
        />
      <div className={styles.cardItem}>
        {/* <h1 className={styles.dateHeading}>{cardData.date} </h1> */}
        <div style={{ display: "flex", alignItems: "flex-start" ,marginTop:'30px' }}>
        <div className="link">
            <span className="underline"> {cardData.description}  </span>
          </div>
          </div>
        <div className={styles.display1}>
          <p className="read">{cardData.read}</p>
          <img className={styles.icon}
            src={cardData.icon}
            alt="icon not found"
          />
        </div>
      </div>
    </div>
    </Link>

  );
}

export default Card;
