
// dom manipulation using basic js



let gbTime = new Intl.DateTimeFormat('en-GB').format(new Date())   //Great Britian
const timeOutput = document.querySelector('#lang-output')
timeOutput.textContent = gbTime
