import styles from './OrderItem.module.css'


const OrderItem = ({number, date, status}) => {
    function showStatus() {
        if (status === 'В обработке') return <span style={{backgroundColor: '#1670B7'}}>{status}</span>
        if (status === 'Готово') return <span style={{backgroundColor: '#46FF96'}}>{status}</span>
        if (status === 'Получено') return <span style={{backgroundColor: '#323E48'}}>{status}</span>  //696F73
    }

    return (
        <div className={styles.order}>
            <div className={styles.info}>
                <h4>Заявка от {date}</h4>
                <p>№{number}</p>
            </div>

            {showStatus()}
        </div>
    )
}


export default OrderItem;

