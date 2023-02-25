// Practice with Date and Time in Js

//general helpers
let newDate = new Date();
let specificDate = new Date(2019, 0, 24, 11, 30, 25, 0) //year, month, day, hour, minute, seconds, miliseconds
let currentDay = newDate.getDay(); 
let currentMonth = newDate.getMonth() + 1;  //month starts at 0
let currentYear = newDate.getFullYear();
let currentMinutes = newDate.getMinutes();
let currentUTC = newDate.getUTCDate();


// get Date and format into expected output
// mm-dd-yyyy, mm/dd/yyyy
const getFormattedDate = (date = new Date()) => {
    const days = date.getDay() + 1
    const months = date.getMonth() + 1
    const years = date.getFullYear()
    return `${days}/${months}/${years}`
}
console.log(getFormattedDate())

// get timestamp of current time from date object
const timestamp = (date) => {
    return date.getTime()
}
console.log(timestamp(newDate))


// js has some built in Date formatting types attached to the Intl object
let us = new Intl.DateTimeFormat('en-US').format(newDate)   //United States
let ca = new Intl.DateTimeFormat('en-CA').format(newDate)   //Canada
let gb = new Intl.DateTimeFormat('en-GB').format(newDate)   //Great Britian
let de = new Intl.DateTimeFormat('de-DE').format(newDate)   //German
let ar = new Intl.DateTimeFormat('ar').format(newDate)   //Arabic
let sv = new Intl.DateTimeFormat('sv').format(newDate)   //Swedish
let sv2 = new Intl.DateTimeFormat('sv','ar').format(newDate)   // can pass a list, it falls back to second option if first is not supported
console.log(us)
console.log(ca)
console.log(gb)
console.log(de)
console.log(ar)
console.log(sv)
