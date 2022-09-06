import React from "react";
import { Card1 } from "../../constant/Constant";
import ImagesCard from "../imagesCard/ImagesCard";
import { Grid } from "@mui/material";

function SecondSection() {
  return (
    <div>
      <Grid container spacing={0}>
        {Card1.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <ImagesCard Card1={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default SecondSection;
