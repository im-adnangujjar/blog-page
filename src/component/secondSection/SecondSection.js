import React from "react";
import { allData } from "../../constant/Constant";
import ImagesCard from "../imagesCard/ImagesCard";
import { Grid } from "@mui/material";
import Button from "../button/Button";

function SecondSection() {
  return (
    <div>
      <Grid container spacing={5}>
        {allData?.slice(0, 12)?.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <ImagesCard imageCardData={item} />
            </Grid>
          );
        })}
      </Grid>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
        <Button title="SHOW MORE" />
      </div>
    </div>
  );
}

export default SecondSection;
