import React from "react";
import logo from './logo.png'
import styles from './Logo.module.css'


const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} alt='' src={logo}></img>
            <h3 className={styles.text}>Nexus</h3>
        </div>
    )
}

export default Logo;