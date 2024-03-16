import React from "react";


const BlueLabel = ({label}) => {
    const styles = {
        color: '#75BDF8',
        fontFamily: 'Overpass',
        fontWeight: '600',
        fontSize: '1.6vw',
    }

    return (
        <h3 style={styles}>{label}</h3>
    )
}


export default BlueLabel;