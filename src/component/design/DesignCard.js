import React from 'react'
import styles from "../../../styles/Card.module.css";
import Link from 'next/link';
import Image from 'next/image';




function DesignCard ({Design}) {
  return (
    <div className={styles.display}>
      <Link href={`/blog/${Design.id}`}>
        <Image width='300' height='250' src={Design.image} alt="image not found" />
      </Link>
      <div className={styles.cardItem}>
        <h1 className={styles.dateHeading}>{Design.date} </h1>
        <p className={styles.description}> {Design.description}</p>
        <div className={styles.display1}>
          <p className={styles.read}>{Design.read}</p>
          <Image width='20' height='20' lang='fill' src={Design.icon} alt="icon not found" />
        </div>

      </div>
    </div>
  )
}

export default DesignCard