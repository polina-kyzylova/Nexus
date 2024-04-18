import styles from './IDCard.module.css'
import BlueLabel from '../../components/BlueLabel'
import open from './openCard.png'
import IDCardModal from '../IDCardModal/IDCardModal'
import { useState } from 'react';
import { setUserPhoto } from '../../store/slices/userSlice';
import { useSelector, useDispatch } from "react-redux";
import { getStorage, ref, getDownloadURL } from "firebase/storage";



const IDCard = () => {
    const [openIDCard, setOpenIDCard] = useState(false);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    // Uploading a student's photo from the Firebase storage
    const storage = getStorage();
    const starsRef = ref(storage, `${user.id}/photo.png`);
    
    function getUserPhotoFromDB() {
        getDownloadURL(starsRef)
        .then((photoURL) => {
            dispatch(setUserPhoto({photo_url: photoURL}))
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
        <div className={styles.card}>
            {!!user.photo_url ? null : getUserPhotoFromDB()}

            <div className={styles.card_header}>
                <div className={styles.header_labels}>
                    <BlueLabel label='Студенческий билет'/>
                    <p>№{user.card_id}</p>
                </div>

                <button onClick={() => setOpenIDCard(true)}>
                    <img src={open} alt='' />
                </button>
            </div>


            <div className={styles.card_body}>
                {!!user.photo_url ? <img alt='' src={user.photo_url}/> : null}
                
                <ul className={styles.label_items}>
                    <li>Фамилия</li>
                    <li>Имя, отчество</li>
                    <li>Форма обучения</li>
                    <li>Зачислен приказом</li>
                    <li>Дата выдачи</li>
                </ul>

                <ul className={styles.value_items}>
                    <li className={styles.impt}>{user.surname}</li>
                    <li className={styles.impt}>{user.name} {user.last_name}</li>
                    <li>{user.edu_form}</li>
                    <li>{user.enrolled}</li>
                    <li>{user.accept_date}</li>
                </ul>
            </div>

            <IDCardModal active={openIDCard} setActive={setOpenIDCard} />
        </div>
    )
}

export default IDCard;