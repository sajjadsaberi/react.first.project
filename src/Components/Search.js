import React from 'react';
import styles from './Search.module.css' ;

export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search ...!" className={styles.text} />
      <h1 className={styles.searchText}>Enter the word you want to search !</h1>
    </div>
  )
}
