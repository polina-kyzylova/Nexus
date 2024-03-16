import React, { useState } from "react";
import styles from './PasswordInput.module.css'
import eye from './eye.png'
import closeEye from './eye_close.png'


const PasswordInput = ({onChange}) => { 
    const [show, setShow] = useState(true);

    return (
        <div className={styles.input_box}>
            <span className={styles.icon} id="password-icon">
                {
                    show ?  <img id="show_password" alt='' onClick={() => setShow(false)} src={eye} /> :
                            <img id="hide_password" alt='' onClick={() => setShow(true)} src={closeEye} />
                }
            </span>
            
            {
                show ? <input
                    type="password"
                    name="password-input"
                    onChange={onChange}
                    required 
                        /> :
                        <input 
                            type="text"
                            name="password-input"
                            onChange={onChange}
                            required 
                        />
            }
            
            <label>Пароль</label>
        </div> 
    )
}


export default PasswordInput;