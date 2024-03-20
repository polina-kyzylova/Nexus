
export default function currentDate() {
    let current = new Date()
    let year = current.getFullYear()
    let month = current.getMonth()+1
    let day = current.getDate()

    if (day < 10 && month < 10) return (`0${day}.0${month}.${year}`)
    else if (day < 10) return (`0${day}.${month}.${year}`)
    else if (month < 10) return (`${day}.0${month}.${year}`)
    else return (`${day}.${month}.${year}`)
}
