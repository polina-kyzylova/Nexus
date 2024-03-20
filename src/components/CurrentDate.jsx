import React from "react";


const CurrentDateX = () => {
    function CurrentDatax() {
        let current = new Date()
        let year = current.getFullYear()
        let month = current.getMonth()+1
        let day = current.getDate()

        if (day < 10 && month < 10) return (`0${day}.0${month}.${year}`)
        else if (day < 10) return (`0${day}.${month}.${year}`)
        else if (month < 10) return (`${day}.0${month}.${year}`)
        else return (`${day}.${month}.${year}`)
    }

    const styles = {
        color: '#fff',
        fontFamily: 'Overpass',
        fontWeight: '400',
        fontSize: '1.2vw',
    }

    return (
        <h4 style={styles}>Заявка от {CurrentDatax()}</h4>
    )
}


export default CurrentDateX;