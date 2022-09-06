import React from 'react'
import styles from "../styles/Details.module.css"
import {Card2} from "../src/constant/Constant"
import Related from "../src/component/related/Related";
import Button from '../src/component/button/Button'
import { Grid } from '@mui/material';



function Details() {
  return (
    <div>
    <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img className={styles.image} src={"/imageDetails.jpg"} alt="image not found" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.itemCenter}>
                <h1 className={styles.heading}>Clutch Names Axisbits as The Top Web Design Company in Switzerland For 2022</h1>
                <p className={styles.date}>February 09, 2022</p>
            </div>
        </Grid>


    </Grid>


    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>

            <div className={styles.itemMargin}>
                <div>
                    <p className={styles.paragraph}>Design is all about turning something nebulous and vague into something tangible and concrete. This requires insight, creativity, and skill in order to achieve success. Fortunately, our team possesses all three in spades.</p>
                    <p className={styles.paragraph}>But don’t take our word for it. Listen to anyone that we’ve worked with before because they’ve just helped us once again claim the Clutch top web design company award in Switzerland.</p>
                    <img src={"/clutch logo.png"} alt="image not found" className={styles.image1} />
                    <p className={styles.paragraph}>For those unfamiliar with Clutch, they are a review and rating platform that primarily caters to the B2B industry. They stand out from other platforms due to their unique verification process. This is what allows them to determine the legitimacy of the information sent to them for publication as reviews.
                    </p>
                </div>

                <div>
                    <p className={styles.paragraph}>n order for a business to become a top company on Clutch, they need to earn a high number of five-star reviews just like this one. We appreciate this criterion because it places the power in the hands of people that have direct experience with our work.</p>
                    <p className={styles.paragraph}>{`It’s because of this that we want to express our sincere gratitude for everyone that had a part in making this award a reality through writing reviews. Their effort in sharing their thoughts on our performance was the driving force behind allowing our team to claim this accolade.`}</p>
                </div>
                <div><img src={"/line.jpg"} alt="image not found" /></div>

                <p className={styles.paragraph1}>{`<i>“We're very pleased to receive Clutch's top firms in Switzerland award. It showcases that our excellence is not a temporary act, but a habit.</i>”`}</p>
                <p className={styles.paragraph}>💬 Denis Gomes Iljazi, Co-Owner of Axisbits</p>

                <p className={styles.paragraph}>We encourage everyone to learn more about our team and services by going through our website. If you like what you see why not give us a call and partner with us for your next project.</p>

            </div>
        </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
        <div className={styles.scroll}>

                <div className={styles.box}>
                    <h1 className={styles.subscribe}>Subscribe to our newsletter:</h1>
                    <div className={styles.inputDisplay}>
                        <input className={styles.input} type="Email" placeholder="Enter email subscribe  our to news" />
                        <div className={styles.icon}><img className={styles.imageIcon} src={"right-arrow.png"} alt="" /></div>
                   
                        {/* <div className={styles.icon}><img className={styles.imageIcon} src={"right-arrow.png"} alt="" /></div> */}
                    </div>
                    <div className={styles.bgColor}>
                        <h2 className={styles.title}>Are you ready to work with us?</h2>
                        <p className={styles.description}>we develop your project and turn it into a completed product</p>
                        <Button />
                    </div>
                    <p>share</p>
                    <div className={styles.icon_display}>
                        <div className={styles.icon_bg}>
                            <img width="20px" height="30px" src={"/facebook-black.svg"} alt="facebook" />

                        </div>
                        <div className={styles.icon_bg} >
                            <img width="20px" src={"/twitter-black.svg"} alt="twitter" />
                        </div>
                        <div className={styles.icon_bg}>
                            <img width="20px" src={"/linkedin-black.svg"} alt="linkedin" />
                        </div>
                    </div>

                </div>
        </div>

            </Grid>

    </Grid>

    <h2 className={styles.article}>Related Articles</h2>
    <Grid container spacing={2}>
        {
            Card2.map((item, index) => {
                return <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={index}>
                    <Related Card2={item} />
                </Grid>
            })

        }
    </Grid>
    </div>
  )
}

export default Details