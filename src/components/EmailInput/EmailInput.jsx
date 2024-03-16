import styles from './EmailInput.module.css'


const EmailInput = ({onChange, text}) => {
    return (
        <div class={styles.input_box}>
            <input type="text" id="email-input" onChange={onChange} required/>
            
            {
            text ? <select name="email_prefix" id="email_prefix">
                     <option value="student">@std.tyuiu.ru</option>
                     <option value="staff">@tyuiu.ru</option>
                  </select> : null
            }

            <label for='email-input'>Корпоративная почта</label>
        </div>
    )
}


export default EmailInput;
