import React from 'react';
import styles from './Logos.module.css' ;
import apple from '../images/apple.png' ;
import samsung from '../images/samsung1.png' ;
import xiaomi from '../images/Xiaomi.png' ;
import huawei from '../images/huawei.jpg'

export default function Logos() {
  return (
    <div className={styles.container}>
        <h3>Who Support Us ?</h3>
        <div>
            <img src={apple} alt="apple" />
            <img src={samsung} alt="samsung" />
            <img src={xiaomi} alt="Xiaomi" />
            <img src={huawei} alt="Huawei" />
        </div>
      
    </div>
  )
}
