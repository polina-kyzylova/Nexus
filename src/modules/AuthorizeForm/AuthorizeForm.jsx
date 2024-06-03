import React from "react";
import styles from './AuthorizeForm.module.css';
import Button from "../components/Button";
import EmailInput from '../components/EmailInput/EmailInput';
import PasswordInput from "../components/PasswordInput/PasswordInput";
import CheckBox from "../components/CheckBox";


const AuthorizeForm = ({handleClick}) => {
    return (
        <div className={styles.form}>
            <h2>Вход в Личный кабинет</h2>

            <div className={styles.section}>
                <EmailInput />
                <PasswordInput />
                <CheckBox />
            </div>
            
            <div className={styles.section}>
                <Button 
                    className={styles.enter_btn} 
                    text='Войти'
                    onClick={() => handleClick(email, pass)}
                />
                <Button className={styles.reset_btn} text='Не могу войти'/>
            </div>
        </div>
    )
}


export {AuthorizeForm}

