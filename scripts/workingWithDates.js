



// get Date and format into expected output
// mm-dd-yyyy, mm/dd/yyyy
const getFormattedDate = (date = new Date()) => {
    const days = date.getDate()
    const months = date.getMonth() + 1
    const years = date.getFullYear()
    return `${days}/${months}/${years}`
}
console.log(getFormattedDate())