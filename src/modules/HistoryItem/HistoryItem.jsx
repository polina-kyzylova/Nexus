import React from 'react';
import styles from './HistoryItem.module.css';
import recipient from './recipient.png';
import place from './place.png';
import doc from './document.png';
import OrderProcessing from '../../components/OrderProcessing/OrderProcessing';
import OrderDone from '../../components/OrderDone/OrderDone';
import OrderRecieved from '../../components/OrderRecieved/OrderRecieved';




export default function HistoryItem({date, number, orderStatus,
                                    fullName, email, group, phone, 
                                    purpose, format, amount, files}) {
 
    function showOrderStatus() {
        if (orderStatus === 'Новая') return <OrderProcessing orderStatus='В обработке' orderNumber={number} />
        if (orderStatus === 'Выполнена') return <OrderDone orderStatus='Готово' orderNumber={number} /> 
        if (orderStatus === 'Получена') return <OrderRecieved orderStatus='Получено' />
    }

    function amountPrefix() {
        if (amount === 1) return <p>{amount} экземпляр</p>
        if (amount >= 2 && amount <= 4) return <p>{amount} экземпляра</p>
        if (amount > 4) return <p>{amount} экземпляров</p>
    }


  return (
    <div className={styles.container} id={number}>
        {showOrderStatus()}

        <div className={styles.core}>
            <div className={styles.core_header}>
                <h1>Заявка от {date}</h1>
                <h2>№{number}</h2>
            </div>

            <div className={styles.recipient}>
                <div className={styles.thing}>
                    <img src={recipient} alt='' />
                    <h3>Получатель</h3>
                </div>

                <div className={styles.info}>
                    <p>{fullName}</p>
                    <p>{email}</p>
                    <p>+{phone}</p>
                    <p>{group}</p>
                </div>
            </div>

            <div className={styles.docum}>
                <div className={styles.thing}>
                    <img src={doc} alt='' />
                    <h3>Документ</h3>
                </div>

                <div className={styles.info}>
                    <p>{purpose}</p>
                    <p>{format} формат</p>
                    {amount ? amountPrefix() : null }
                </div>
            </div>

            {orderStatus !== 'Новая' && format === 'Бумажный' ?
                <div className={styles.place}>
                    <div className={styles.thing}>
                        <img src={place} alt='' />
                        <h3>Место выдачи</h3>
                    </div>

                    <div className={styles.info}>
                        <p>ул. Мельникайте, 70 (корпус 7)</p>
                        <p>Кабинет 204</p>
                        <p>Методист Юсупова. А. Н.</p>
                        <p>С 9:00 до 17:00</p>
                    </div> 
                </div> : null
            }

            {files ? 
                <div className={styles.result}>

                </div> : null
            }
        </div>
    </div>
  )
}
