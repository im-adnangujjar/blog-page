import React from "react";
import styles from "../../../styles/FirstSection.module.css";
import { cardData, allData } from "../../constant/Constant";
import Card from "../card/Card";
import Link from "next/link";
import Image from "next/image";
import { Grid } from "@mui/material";

function FirstSection() {
  let suggestedData = allData[allData?.length - 1];
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <div className={styles.itemPadding}>
            <Link href={`/blog/${suggestedData.id}`}>
              <Image
                src={suggestedData.image}
                width="100%"
                height="65px"
                layout="responsive"
                alt="image not found"
              />
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: "30px",
              }}
            >
              
              <div className="link">
                <span className="underline">{suggestedData.description}</span>
              </div>
            </div>

            <div className={styles.display1}>
              <p className={styles.read}>{suggestedData.read}</p>
              <div className={styles.icon}>
                <Image
                  width="20px"
                  height="20px"
                  src={suggestedData.icon}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid container spacing={0}>
            {allData?.slice(0, 3)?.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={12} key={index}>
                  <Card cardData={item} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FirstSection;
