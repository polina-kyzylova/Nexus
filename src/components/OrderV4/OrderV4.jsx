import React, {useState} from 'react';
import styles from './OrderV4.module.css';
import success_order from '../success_order.png';
import fail_order from '../fail_order.png';
import currentDate from "../../hooks/currentDate";
import OrderTemplate from '../OrderTemplate';



const OrderV4 = ({active, setActive, orderNumber}) => {
    const [order, setOrder] = useState(true);
    const [validDisc, setValidDisc] = useState(false);
    const [validProf, setValidProf] = useState(false);
    const [amount, setAmount] = useState(1);
    const [professor, setProfessor] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [reason ,setReason] = useState('');

    const MinAmount = () => {
        if (amount > 1) setAmount(amount - 1);
        else setAmount(1);
    }

    function ValidOrder() {
        if (professor !== '' && discipline !== '') {
            setOrder(false)
        }
        else if (professor === '' && discipline !== '') {
            setValidProf(true)
            document.getElementById('professor').style.border = '2px solid #E65659'
        }
        else if (professor !== '' && discipline === '') {
            setValidDisc(true)
            document.getElementById('discipline').style.border = '2px solid #E65659'
        }
        else {
            setValidDisc(true)
            document.getElementById('discipline').style.border = '2px solid #E65659'
            setValidProf(true)
            document.getElementById('professor').style.border = '2px solid #E65659'
        }
    }


    return (
        order ?
        <div className={styles.container}>
            <div className={styles.header}>
                <h4 className={styles.data}>Заявка от {currentDate()}</h4>
            </div>


            <div className={styles.body}>
                <OrderTemplate active={active} />

                <div className={styles.order}>
                    <div className={styles.area}>
                        <p>Учебная дисциплина:</p>

                        <div>
                            <textarea 
                                className={styles.area_disc}
                                id='discipline'
                                value={discipline}
                                onChange={(e) => setDiscipline(e.target.value)}
                                onFocus={() => {setValidDisc(false) 
                                    document.getElementById('discipline').style.border = 'none'}}
                                ></textarea>
                            {validDisc ? <h5>Заполните поле</h5> : null}
                        </div>
                    </div>

                    <div className={styles.area}>
                        <p>Семестр проведения:</p>
                        <div className={styles.area_box}>
                            <button onClick={() => MinAmount()}>-</button>
                            <input disabled value={amount}/>
                            <button onClick={() => setAmount(amount + 1)}>+</button>
                        </div>
                    </div>

                    <div className={styles.area}>
                        <p>Преподаватель:</p>
                        <div>
                            <textarea 
                                className={styles.area_disc} 
                                id='professor' 
                                value={professor}
                                onChange={(e) => setProfessor(e.target.value)}
                                onFocus={() => {setValidProf(false) 
                                    document.getElementById('professor').style.border = 'none'}}
                            ></textarea>
                            {validProf ? <h5>Заполните поле</h5> : null}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <button className={styles.cancel_btn} onClick={() => setActive(false)}>Отмена</button>
                <button className={styles.sent_btn} onClick={() => ValidOrder()}>Отправить</button>
            </div>
        </div> :

        <div className={styles.success}>
            <h2>Заявка <span>№{orderNumber}</span> отправлена!</h2>
            <img src={success_order} alt=''/>

            <div className={styles.success_info}>
                <p>Обращение будет рассмотрено в течение <span>2 рабочих дней.</span></p>
                <p>Вы получите уведомление о результатах рассмотрения <br />вашей заявки.</p>
            </div>

            <button className={styles.success_btn} onClick={() => {setActive(false); setOrder(true)}}>Ок</button>
        </div> 
    )
}


export default OrderV4;