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
                                    purpose, format, amount, 
                                    corpus, room, manager, workTime, files}) {
 
    function showOrderStatus() {
        if (orderStatus === 'В обработке') return <OrderProcessing orderStatus={orderStatus} />
        if (orderStatus === 'Готово') return <OrderDone orderStatus={orderStatus} /> 
        if (orderStatus === 'Получено') return <OrderRecieved orderStatus={orderStatus} />
    }


  return (
    <div className={styles.container}>
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
                    <p>{phone}</p>
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
                    {amount ? <p>{amount} экземпляра</p> : null }
                </div>
            </div>

            {format === 'Бумажный' ?
                <div className={styles.place}>
                    <div className={styles.thing}>
                        <img src={place} alt='' />
                        <h3>Место выдачи</h3>
                    </div>

                    <div className={styles.info}>
                        <p>Корпус {corpus}, кабинет {room}</p>
                        <p>Методист {manager}</p>
                        <p>{workTime}</p>
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
