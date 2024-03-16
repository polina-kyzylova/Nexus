import BlueLabel from '../../components/BlueLabel'
import styles from './OrdersHistory.module.css'
import image from './orders_history.png'
import arrow from './arrow_gray.png'
import OrderItem from '../../components/OrderItem/OrderItem'


const OrdersHistory = () => {
    return (
        <div className={styles.orders}>
            <div className={styles.content}>
                <div className={styles.orders_header}>
                    <img className={styles.image} src={image} alt=''/>
                    <BlueLabel label='История заявок'/>
                    <img className={styles.arrow} src={arrow} alt=''/>
                </div>

                <OrderItem
                    orderNumber='102411735'
                    orderDate='23.11.2023'
                    orderStatus='В обработке'
                />

                <OrderItem
                    orderNumber='836296418'
                    orderDate='20.11.2023'
                    orderStatus='Готово'
                />

                <OrderItem
                    orderNumber='764928387'
                    orderDate='15.09.2022'
                    orderStatus='Получено'
                />
            </div>
        </div>
    )
}


export default OrdersHistory;