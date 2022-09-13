import React, { useState } from "react";
import { allData } from "../../constant/Constant";
import ImagesCard from "../imagesCard/ImagesCard";
import { Grid } from "@mui/material";
import Button from "../button/Button";

function SecondSection() {
  const [limit, setLimit] = useState(12);
  return (
    <div>
      <Grid container spacing={5}>
        {allData?.slice(0, limit)?.map((item, index) => {
          console.log("allData", allData);
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <ImagesCard imageCardData={item} />
            </Grid>
          );
        })}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {limit === allData?.length ? (
          <Button onClick={() => setLimit(12)} title="SHOW LESS" />
        ) : (
          <Button onClick={() => setLimit(allData?.length)} title="SHOW MORE" />
        )}
      </div>
    </div>
  );
}

export default SecondSection;
