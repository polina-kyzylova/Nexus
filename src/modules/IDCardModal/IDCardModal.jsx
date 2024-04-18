import React, { useState } from 'react';
import styles from './IDCardModal.module.css';
import closeCard from './closeCard.png';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


export default function IDCardModal({active, setActive}) {
    const [idCardURL, setIDCardURL] = useState('');
    const id = useSelector(state => state.user.id);

    // Uploading a student's ID card from the Firebase storage
    const storage = getStorage();
    const starsRef = ref(storage, `${id}/ID_card.png`);

    function showCard() {
        getDownloadURL(starsRef)
        .then((cardURL) => {
            setIDCardURL(cardURL);
        })
        .catch((error) => {
            switch (error.code) {
            case 'storage/object-not-found':
                break;
            case 'storage/unauthorized':
                break;
            case 'storage/canceled':
                break;
            case 'storage/unknown':
                break;
            default: break;
            }
        });
    }


    return (
        active ? 
        <div className={styles.modal} onClick={() => {setActive(false)}}>
            {showCard()}

            <div className={styles.modal_container} onClick={e => e.stopPropagation()}>
                <button className={styles.close} onClick={() => setActive(false)}>
                    <img src={closeCard} alt='' />
                </button>

                {idCardURL ? 
                    <img className={styles.card} src={idCardURL} alt='' /> 
                    : <CircularProgress size='5vw' color='primary' />}
            </div>
        </div> : null
    )
}
