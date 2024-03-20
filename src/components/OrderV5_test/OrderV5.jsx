import React, { useState } from "react";
import styles from "./OrderV5.module.css";
import FolderIcon from "@mui/icons-material/Folder";
import image from "../success_orded.png";
import currentDate from "../../hooks/currentDate";
import OrderTemplate from "../OrderTemplate";

import { getDatabase, set, ref } from "firebase/database";
import { useSelector, useDispatch } from "react-redux";
//import { addOrder5 } from '../../store/slices/ordersSlice';


import { getStorage, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";



const OrderV5 = ({ active, setActive }) => {
    const [order, setOrder] = useState(true);
    const [Fname, setFname] = useState([]);
    const [files, setFiles] = useState([]);
    const [upload, setUpload] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [validTitle, setValidTitle] = useState(false);
    const [validText, setValidText] = useState(false);

    const { id, name, } = useSelector(state => state.user);
    const [orderID, setOrderID] = useState();
    const dispatch = useDispatch();
    let order_no = 999000000;
    


    function addFiles() {
        let inputFiles = document.getElementById("inputFiles").files;

        for (let i = 0; i < inputFiles.length; i++) {
            if (Fname.includes(inputFiles[i].name)) {
                alert(`Файл "${inputFiles[i].name}" уже был загружен`);
            } else {
                files.push({ file: inputFiles[i] });
                Fname.push(inputFiles[i].name);
            }
        }
        if (upload) setUpload(false);
        else setUpload(true);
    }

    function generate() {
        return Fname.map((mas) =>
            React.cloneElement(
                <div className={styles.files_item} id={mas}>
                    <div className={styles.val}>
                        <FolderIcon sx={{ color: "#08090A" }} />
                        <p>{mas}</p>
                    </div>
                    <button onClick={() => deleteFile(mas)}>X</button>
                </div>,
                { key: mas }
            ));
    }

    function deleteFile(fileName) {
        for (let i = 0; i < Fname.length; i++) {
            if (name[i] === fileName) {
                Fname.splice(i, 1);
                files.splice(i, 1);
            }
        }
        document.getElementById(fileName).style.display = "none";
    }




    function ValidOrder() {
        if (title !== "" && text !== "") {
            setOrderID(order_no);
            setOrder(false);
            // save order to redux store

            // sent order to database
            const db = getDatabase();
            const myFile = files[0];
            set(ref(db, 'student_orders/' + id + '/' + order_no), {
                username: name,
                order_purpose: active,
                title: title,
                text: text,
                file: myFile,
            });
            
            // sent order files to storage
            //const myFile = files[0];
            //const storage = getStorage();
            //const storageRef = ref(storage, 'files/' + Fname[0]);
            //uploadBytes(storageRef, myFile).then((snapshot) => {
            //    console.log('Uploaded a blob or file!');
            //});


            
            order_no += 1;
        } 
        else if (title === "" && text !== "") {
            setValidTitle(true);
            document.getElementById("title").style.border = "2px solid #E65659";
        } 
        else if (title !== "" && text === "") {
            setValidText(true);
            document.getElementById("text").style.border = "2px solid #E65659";
        } 
        else {
            setValidTitle(true);
            document.getElementById("title").style.border = "2px solid #E65659";
            setValidText(true);
            document.getElementById("text").style.border = "2px solid #E65659";
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
                    <div className={styles.title}>
                        <p>Тема обращения:</p>
                        <div>
                        <input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onFocus={() => {setValidTitle(false) 
                                document.getElementById('title').style.border = 'none'}}
                        ></input>
                        {validTitle ? <h5>Заполните поле</h5> : null}
                        </div>
                    </div>

                    <div className={styles.area}>
                        <p>Текст обращения:</p>
                        <div>
                        <textarea
                            id="text"
                            name='orderText'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onFocus={() => {setValidText(false) 
                                document.getElementById('text').style.border = 'none'}}
                        ></textarea>
                        {validText ? <h5>Заполните поле</h5> : null}
                        </div>
                    </div>

                    <div className={styles.document}>
                        <div className={styles.upload}>
                        <p>Файлы:</p>
                        <p className={styles.files_uploader} id="files_uploader">
                            <input
                            type="file"
                            multiple="multiple"
                            id="inputFiles"
                            onChange={() => addFiles()}
                            aria-label="или выберите файлы"
                            />
                            <span>Выбрать файлы</span>
                        </p>
                        </div>

                        <div className={styles.files}>
                            {generate()}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <button className={styles.cancel_btn} onClick={() => setActive(false)}>Отмена</button>
                <button className={styles.sent_btn} onClick={() => ValidOrder()}>Отправить</button>
            </div>
        </div>  
        : 
        <div className={styles.success}>
            <h2>
                Заявка <span>№{orderID}</span> отправлена!
            </h2>
            <img src={image} alt="" />

            <div className={styles.success_info}>
                <p>Обращение будет рассмотрено в течение <span>5 рабочих дней.</span></p>
                <p>Вы получите уведомление о результатах рассмотрения <br />вашей заявки.</p>
            </div>

            <button
                className={styles.success_btn}
                onClick={() => {setActive(false); setOrder(true);}}
            >Ок</button>
        </div>
    );
};



export default OrderV5;
