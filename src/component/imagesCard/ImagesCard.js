import React from "react";
import styles from "../../../styles/ImagesCards.module.css";
import Link from "next/link";
import Image from "next/image";

function ImagesCard({ imageCardData }) {
  console.log("imageCardData", imageCardData);

  return (
    <div className={styles.maiContainer}>
      <Link href={`/blog/${imageCardData.id}`}>
        <Image 
        width='300' height='200'
          className={styles.image}
          src={imageCardData.image}
          alt="image not found"
        />
      </Link>
      <h1 className={styles.dateHeading}>{imageCardData.date}</h1>
      <p className={styles.description}>{imageCardData.description}</p>
      <div className={styles.display}>
        <p className={styles.read}>{imageCardData.read}</p>
        <Image
          width="20"
          height="20"
          src={imageCardData.icon}
          alt="image not found"
        />
      </div>
    </div>
  );
}

export default ImagesCard;
