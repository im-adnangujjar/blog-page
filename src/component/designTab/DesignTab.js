import React from "react";
import { Design, Card2, allData } from "../../constant/Constant";
import { Grid } from "@mui/material";
import styles from "../../../styles/DesignTab.module.css";
import Related from "../related/Related";
import DesignCard from "../design/DesignCard";
import Image from "next/image";

function DesignTab() {
  let suggestedData = allData[allData?.length-5];
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Image
            width="800"
            height="500"
            src={"/design1.jpg"}
            alt="image not found"
          />
          {/* <h1 className={styles.dateHeading}>December 08, 2021</h1> */}

          <div style={{ display: "flex", alignItems: "flex-start",marginTop:'30px' }}>
            <p className={styles.description}>{suggestedData.description}</p>
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
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid container spacing={0}>

            {
              allData.slice(9,12).map((item, index) => {
                return <Grid item xs={12} sm={6} md={4} lg={12} key={index}>
                  <DesignCard Design={item} />  </Grid>
              })}
          </Grid>

        </Grid>
      </Grid>

      <Grid container spacing={0}>
        {
          allData.slice(6,9).map((item, index) => {
            return <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Related Card2={item} />
                </Grid>
          })
        }
      </Grid>
    </div>
  );
}

export default DesignTab;
