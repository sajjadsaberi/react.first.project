import React from 'react' ;
import styles from './Banner.module.css' ;
import banner from '../images/banner2.jpg';

export default function Banner() {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
      <div className={styles.textContainer}>
             <h1>Sajjad Saberi</h1>
             <p>
                I'am <span>React JS</span> and TypeScript Developer
             </p>
      </div>
    </div>
  )
}
