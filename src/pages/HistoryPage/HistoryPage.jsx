import React from 'react';
import styles from './HistoryPage.module.css';
import HistoryItem from '../../modules/HistoryItem/HistoryItem';
import { Link } from 'react-router-dom';
import arrow from './arrow_back.png';


export default function HistoryPage() {
    const orders = [
        {
            'id': '111111',
            'date': '22.10.2020',
            'status': 'В обработке',
            'purpose': 'Справка с места обучения',
            'format': 'Электронный'
        }, 
        {
            'id': '222222',
            'date': '12.11.2022',
            'status': 'Готово',
            'purpose': 'Табель успеваемости',
            'format': 'Бумажный',
            'amount': '2'
        }, 
        {
            'id': '333333',
            'date': '15.11.2020',
            'status': 'Получено',
            'purpose': 'Повышенная стипендия',
            'format': 'Электронный',
            'files': 'file1'
        }
    ];


    function generateOrders() {
        return orders.map(element =>
            React.cloneElement(
                <HistoryItem
                    date={element.date}
                    number={element.id}
                    orderStatus={element.status}
                    fullName='Иванов Иван Иванович'
                    email='ivanovii@std.tyuiu.ru'
                    phone='+7 (999) 111-11-11'
                    group='ПКТб-22-1'
                    purpose={element.purpose}
                    format={element.format}
                    amount={element.amount}
                    corpus='7'
                    room='206'
                    manager='Петрова А. Н.'
                    workTime='ПН-ПТ 09:00 - 17:00'
                    files={element.files}
                />,
                { key: element.id }
            ))
    }


    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Link className={styles.arrow} to="/">
                    <img src={arrow} alt='' />
                    <p>Назад</p>
                </Link>

                <h1>Заявки</h1>
            </div>

            {generateOrders()}
        </div>
    )
}
