import React from 'react'
import styles from '../BlockCards/BlockCards.module.css'
import card1 from '../../../../../public/images/photo1.svg'
import card2 from '../../../../../public/images/photo2.svg'
import card3 from '../../../../../public/images/photo3.svg'
import card5 from '../../../../../public/images/photo4.svg'
import card4 from '../../../../../public/images/photo5.svg'
import card6 from '../../../../../public/images/photo6.svg'
import card7 from '../../../../../public/images/photo7.svg'

function BlockCards() {
  return (
    <div className={styles.blocks}>
      <span className={styles.text1}>Use mixed grid with imagery, replace with your own photos and descriptions</span>
      <div className={styles.card1}>
        <img src={card1} alt="" />
        <span>
          We aimed to deliver HQ templates for Figma <br />
          <p>Used by 123 people</p>
        </span>
      </div>
      <div className={styles.cardbutton}><button>Learn more</button></div>
      <div className={styles.card2}>
        <img src={card2} alt="" />
        <span>Consider it done!</span>
      </div>
      <div className={styles.card3}>
        <img src={card3} alt="" />
      </div>
      <div className={styles.card4}>
        <img src={card4} alt="" />
        <span>See my goal?</span>
      </div>
      <span className={styles.text2}>This is multipurpose grid, it fits for portfolio, services or agency web site</span>
      <div className={styles.card5}>
      <img src={card5} alt="" />
      </div>
      <div className={styles.card6}>
      <img src={card6} alt="" />
      </div>
      <div className={styles.card7}>
        <img src={card7} alt="" />
      </div>
    </div>
  )
}

export default BlockCards