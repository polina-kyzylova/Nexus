import React from 'react';
import styles from './OrderProcessing.module.css';


export default function HistoryOrderProcessing({orderStatus}) {
  return (
    <div className={styles.status} id='order_color'>
        <div className={styles.status_label} id='status_label'>
            <p id={styles.label}>{orderStatus}</p>
        </div>

        <p>Отменить заявку</p>
    </div>
  )
}
