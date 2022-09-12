import React from "react";
import styles from "../../../styles/ImagesCards.module.css";
import Link from "next/link";
import Image from "next/image";
import { shrinkText } from "../utils/shrinkText";

function ImagesCard({ imageCardData }) {
  return (
    <Link className={styles.move} href={`/blog/${imageCardData.id}`}>
      <div className={styles.maiContainer}>
        <img
          className={styles.image}
          src={imageCardData.image}
          alt="image not found"
        />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "30px",
          }}
        >
          <div className="link">
            <span className="underline">
              {shrinkText(imageCardData.description, 35)}
            </span>
          </div>
        </div>
        <div className={styles.display}>
          <p className="read">{imageCardData.read}</p>
          <Image
            width="20"
            height="20"
            src={imageCardData.icon}
            alt="image not found"
          />
        </div>
      </div>
    </Link>
  );
}

export default ImagesCard;
