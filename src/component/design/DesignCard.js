import React from "react";
import styles from "../../../styles/Card.module.css";
import Link from "next/link";
import Image from "next/image";

function DesignCard({ Design }) {
  return (
    <div className={styles.display}>
      <Link href={`/blog/${Design.id}`}>
        <img
          className={styles.image}
          src={Design.image}
          alt="image not found"
        />
      </Link>
      <div className={styles.cardItem}>
        <div className="link">
          <span className="underline">{Design.description}</span>
        </div>
        <div className={styles.display1}>
          <p className={styles.read}>{Design.read}</p>
          <Image
            width="20"
            height="20"
            lang="fill"
            src={Design.icon}
            alt="icon not found"
          />
        </div>
      </div>
    </div>
  );
}

export default DesignCard;
