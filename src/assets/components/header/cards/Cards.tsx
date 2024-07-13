import React from 'react'
import styles from './Cards.module.css'
import '../../../../public/styles/global.css'
import BlockCards from './BlockCards/BlockCards'

function Cards() {
  return (
    <main className={styles.main}>
        <div className="container">
            <h1>Combine <span className={styles.markWord}>fine</span> images <br />
            <span className={styles.smallText}> To represent a product</span></h1>
            <BlockCards/>
        </div>
    </main>
  )
}

export default Cards