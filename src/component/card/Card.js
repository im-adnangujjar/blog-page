import React from "react";
import styles from "../../../styles/Card.module.css";
import Link from "next/link";
import { shrinkText } from "../utils/shrinkText";
import Image from "next/image";

function Card({ cardData }) {
  return (
    <div className={styles.display}>
      <Link href={`/blog/${cardData.id}`}>
        <img 
        className={styles.image}
          src={cardData.image}
          alt="image not found"
        />
      </Link>
      <div className={styles.cardItem}>
        {/* <h1 className={styles.dateHeading}>{cardData.date} </h1> */}
        <div style={{ display: "flex", alignItems: "flex-start" ,marginTop:'30px' }}>
        <div className="link">
            <span className="underline"> {shrinkText(cardData.description, 35)}  </span>
          </div>
          </div>
        <div className={styles.display1}>
          <p className="read">{cardData.read}</p>
          <Image
            width="20"
            height="20"
            src={cardData.icon}
            alt="icon not found"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
