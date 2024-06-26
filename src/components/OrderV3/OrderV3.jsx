import React, { useState } from "react";
import styles from './OrderV3.module.css'
import success_order from '../success_order.png';
import fail_order from '../fail_order.png';
import doc from '../template_doc.png'
import FolderIcon from '@mui/icons-material/Folder';
import currentDate from "../../hooks/currentDate";
import OrderTemplate from '../OrderTemplate';



const OrderV3 = ({active, setActive, orderNumber}) => {
    const [order, setOrder] = useState(true);
    const [valid, setValid] = useState(false);
    const [drag, setDrag] = useState(false);
    const [name, setName] = useState([]);
    const [files, setFiles] = useState([]);
    const [upload, setUpload] = useState(false);
    const [scolarshipType, setScolarshipType] = useState('Academic');


    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
        document.getElementById('files_uploader').style.display = 'none'
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
        document.getElementById('files_uploader').style.display = 'block'
    }

    function onDropHandler(e) {
        e.preventDefault()
        let new_files = [...e.dataTransfer.files]

        for (let i = 0; i < new_files.length; i++) {
            if (name.includes(new_files[i].name)) {
                alert(`Файл "${new_files[i].name}" уже был загружен`)
            } else {
                files.push({file: new_files[i]})
                name.push(new_files[i].name)
            }
        }

        setDrag(false)
        document.getElementById('files_uploader').style.display = 'block'
        document.getElementById('upload').style.border = '#455057 solid 1.5px'
        setValid(false)
    }

    function addFiles() {
        let inputFiles = document.getElementById("inputFiles").files

        for (let i = 0; i < inputFiles.length; i++) {
            if (name.includes(inputFiles[i].name)) {
                alert(`Файл "${inputFiles[i].name}" уже был загружен`)
            } else {
                files.push({file: inputFiles[i]})
                name.push(inputFiles[i].name)
            }
        }

        if (upload) {setUpload(false)}
        else {setUpload(true)}
        document.getElementById('upload').style.border = '#455057 solid 1.5px'
        setValid(false)
    }

    function generate() {
        return name.map((mas) =>
          React.cloneElement(
            <div className={styles.files_item} id={mas}>
                <div className={styles.val}>
                    <FolderIcon sx={{color: '#08090A'}}/>
                    <p>{mas}</p>
                </div>

                <button onClick={() => deleteFile(mas)}>X</button>
            </div>,
            { key: mas }
            ),
        );
    }
    
    function deleteFile(fileName) {
        for (let i = 0; i < name.length; i++) {
            if (name[i] === fileName) {
                name.splice(i, 1);
                files.splice(i, 1);
            }
        }

        document.getElementById(fileName).style.display = 'none'
    }

    const ValidOrder = () => {
        if (files.length !== 0) {
            setValid(false)
            setOrder(false)
        }
        else {
            setValid(true)
            document.getElementById('upload').style.border = '2px solid #E65659'
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
                    <div className={styles.type}>
                        <h4>Вид стипендии:</h4>
                        <select 
                            name="scolarship_type"
                            id="scolarship-type"
                            value={scolarshipType}
                            onChange={(e) => setScolarshipType(e.target.value)}>
                                <option value='Academic'>Академическая</option>
                                <option value='Social'>Социальная</option>
                        </select>
                    </div>


                    <div className={styles.files_type}>
                        <div className={styles.template}>
                            <h4>Необходимые документы:</h4>
                            <div>
                                <img src={doc} alt=''/>
                                <a>{scolarshipType}.zip</a>
                            </div>
                        </div>


                        <div className={styles.document}>
                            <div className={styles.upload} id='upload'>
                                {drag 
                                    ? <div className={styles.drop_area}
                                        onDragStart={e => dragStartHandler(e)}
                                        onDragLeave={e => dragLeaveHandler(e)}
                                        onDragOver={e => dragStartHandler(e)}
                                        onDrop={e => onDropHandler(e)}
                                    ><p>Отпустите для загрузки</p></div>     
                                    : <div className={styles.drag_area}
                                        onDragStart={e => dragStartHandler(e)}
                                        onDragLeave={e => dragLeaveHandler(e)}
                                        onDragOver={e => dragStartHandler(e)}
                                    ><p>Перетащите сюда файлы</p></div>
                                }
                                <p className={styles.files_uploader} id='files_uploader'>
                                    <input type='file' multiple="multiple" id='inputFiles' onChange={() => addFiles()} aria-label='или выберите файлы'/>
                                    <span>или выберите файлы</span>
                                </p>
                            </div> 
                            {valid ? <h5>Загрузите файлы</h5> : null}

                            <div className={styles.files}>
                                {generate()}
                            </div>
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
                <p>Обращение будет рассмотрено в течение <span>10 рабочих дней.</span></p>
                <p>Вы получите уведомление о результатах рассмотрения <br />вашей заявки.</p>
            </div>

            <button className={styles.success_btn} onClick={() => {setActive(false); setOrder(true)}}>Ок</button>
        </div> 
    )
}


export default OrderV3;