import React from 'react'
import styles from "../../../styles/Card.module.css";
import Link from 'next/link';
import Image from 'next/image';


function Card({cardData}) {
        return (
        <div className={styles.display}>
            <Link href={`/blog/${cardData.id}`}>
                <Image  width='300' height='220' src={cardData.image} alt="image not found" />
            </Link>
            <div className={styles.cardItem}>
                <h1 className={styles.dateHeading}>{cardData.date} </h1>
                <p className={styles.description}> {cardData.description}</p>
                <div className={styles.display1}>
                <p className={styles.read}>{cardData.read}</p>
                <Image width='20' height='20'  src={cardData.icon} alt="icon not found" />
                </div>
               
             </div>
        </div>
    )
}

export default Card