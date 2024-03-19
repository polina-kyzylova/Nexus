import styles from './OrderItem.module.css'


const OrderItem = ({orderNumber, orderDate, orderStatus}) => {
    function showStatus() {
        if (orderStatus === 'В обработке') return <span style={{backgroundColor: '#1670B7'}}>{orderStatus}</span>
        if (orderStatus === 'Готово') return <span style={{backgroundColor: '#46FF96'}}>{orderStatus}</span>
        if (orderStatus === 'Получено') return <span style={{backgroundColor: '#323E48'}}>{orderStatus}</span>  //696F73
    }

    return (
        <div className={styles.order}>
            <div className={styles.info}>
                <h4>Заявка от {orderDate}</h4>
                <p>№{orderNumber}</p>
            </div>

            {showStatus()}
        </div>
    )
}


export default OrderItem;

