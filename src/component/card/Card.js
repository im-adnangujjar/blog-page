import React from 'react'
import styles from "../../../styles/Card.module.css";
// interface CardsProps{
//     Cards:any;
//    }
// const Card: React.FC<CardsProps> = ({Cards}: CardsProps) => {


// export default Card
// import React from 'react'

function Card({Cards}) {
        return (
        <div className={styles.display}>
            <div>
                <img className={styles.image} src={Cards.image} alt="image not found" />
            </div>
            <div className={styles.cardItem}>
                <h1 className={styles.dateHeading}>{Cards.date} </h1>
                <p className={styles.description}> {Cards.description}</p>
                <div className={styles.display1}>
                <p className={styles.read}>{Cards.read}</p>
                <img  className={styles.icon}src={Cards.icon} alt="icon not found" />
                </div>
               
             </div>
        </div>
    )
}

export default Card