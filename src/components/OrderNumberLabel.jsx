import React from 'react'

export default function OrderNumberLabel({label}) {
    const styles = {
        color: '#fff',
        fontFamily: 'Overpass',
        fontWeight: '200',
        fontSize: '1.2vw',
        paddingLeft: '3%',
    }

    return (
        <p style={styles}>{label}</p>
    )
}
