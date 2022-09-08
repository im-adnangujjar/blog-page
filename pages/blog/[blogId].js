import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Details.module.css";
import { allData } from "../../src/constant/Constant";
import Button from "../../src/component/button/Button";
import { Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

function AllDetails() {
  const router = useRouter();
  const { blogId } = router.query;
  const data = allData?.filter(
    (item, index) => item.id.toString() == blogId
  )[0];

  return (
    <div>
      <div>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Image
              width="700"
              height="450"
              src={data?.image}
              alt="image not found"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <p className={styles.description}>{data?.description}</p>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={8}>
          <div className={styles.itemMargin}>
            <p className={styles.paragraph}>{data?.paragraph}</p>
            <p className={styles.paragraph}>{data?.paragraph1}</p>
            <div>
              {data?.image1 ? (
                <Image
                width='500'
                height='400'
                  src={data?.image1}
                  alt="image not found"
                />
              ) : (
                <></>
              )}
            </div>
            <p className={styles.paragraph}>{data?.paragraph2}</p>
            <h1>{data?.heading1}</h1>
            <p className={styles.paragraph}>{data?.paragraph3}</p>
            <p className={styles.paragraph}>{data?.paragraph4}</p>
            <p className={styles.paragraph1}>{data?.paragraph5}</p>
            <p className={styles.paragraph}>{data?.paragraph6}</p>
            <p className={styles.paragraph}>{data?.paragraph7}</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
          <div className={styles.scroll}>
            <div className={styles.box}>
              <p className={styles.subscribe}>Subscribe to our newsletter:</p>
              <div className={styles.inputDisplay}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter email and subscribe to new"
                />
                <div className={styles.icon}>
                  <Image
                    width="20"
                    height="20"
                    
                    className={styles.imageIcon}
                    src={"/right-arrow.png"}
                    alt="image not found"
                  />
                </div>
              </div>

              <div className={styles.bgColor}>
                <h3 className={styles.title}>Are you ready to work with us?</h3>
                <p className={styles.description1}>
                  {
                    "We develop your project and turn it into a completed product"
                  }
                </p>
                <Button />
                {/* <CommonButton title='SEND US REQUEST' ctaHandler={function (): void {
          throw new Error('Function not implemented.');
        } } Request={undefined} /> */}
              </div>
              <p>Share:</p>
              <div className={styles.icon_display}>
                <div className={styles.icon_bg}>
                  <Image
                    src={"/facebook-black.svg"}
                    width="20"
                    height="20"
                    alt="facebook"
                  />
                </div>
                <div className={styles.icon_bg}>
                  <Image
                    width="20"
                    height="20"
                    src={"/twitter-black.svg"}
                    alt="twitter"
                  />
                </div>
                <div className={styles.icon_bg}>
                  <Image
                    width="20"
                    height="20"
                    src={"/linkedin-black.svg"}
                    alt="linkedin"
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.data_margin}>
        <h1 className={styles.heading}>Related Articles</h1>
        <Grid container spacing={6}>
          {data?.data2?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <div className={styles.subDiv}>
                  <Link href={`/blog/${item.id}`}>
                    <Image
                      src={item?.img}
                      width="100%"
                      height="60px"
                      layout="responsive"
                      alt="image not found"
                    />
                  </Link>
                  <h1 className={styles.dateHeading}>{item.date}</h1>
                  <p className={styles.par_description}>{item.description}</p>
                  <div className={styles.display}>
                    <p className={styles.read}>{item.read}</p>
                    <Image
                      src={"/right-arrow.png"}
                      width="20px"
                      height="20px"
                      alt="icon is not found"
                    />
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default AllDetails;
