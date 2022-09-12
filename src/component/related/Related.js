import React from "react";
import styles from "../../../styles/Related.module.css";
import Image from "next/image";
import Link from "next/link";
import { shrinkText } from "../utils/shrinkText";

function Related({ Card2 }) {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/blog/${Card2.id}`}>
        <Image
          width="400px"
          height="250px"
          src={Card2.image}
          alt="image not found"
        />
      </Link>
      <div className={styles.cardItem}>
      <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "30px",
          }}
        >
        <div className="link">

        <spam className="underline"> {shrinkText(Card2.description,40)}</spam>
        </div>
        </div>

        <div className={styles.display}>
          <p className={styles.read}>{Card2.read}</p>
          <Image width= '20' height='20' src={Card2.icon} alt="icon not found" />
        </div>
      </div>
    </div>
  );
}

export default Related;
