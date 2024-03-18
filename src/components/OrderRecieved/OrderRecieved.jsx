import React from 'react';
import styles from './OrderRecieved.module.css';


export default function OrderRecieved({orderStatus}) {
  return (
    <div className={styles.status} id='order_color'>
        <div className={styles.status_label} id='status_label'>
            <p id={styles.label}>{orderStatus}</p>
        </div>

        <p>Повторить заявку</p>
    </div>
  )
}
