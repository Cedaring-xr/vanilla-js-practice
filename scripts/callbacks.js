

//working through callbacks vs promises vs async/await

//callbacks
const userLeft = false
const userIsBusy = true

function tutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: 'missingUser',
            message: 'User has left the page'
        });
    } else if (userIsBusy) {
        errorCallback({
            name: 'busyUser',
            message: 'User is busy'
        })
    } else {
        callback('success')
    }
}

tutorialCallback((message) => {
    console.log('success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})

// promises
function promiseTutorial() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'missingUser',
                message: 'User has left the page'
            })
        } else if (userIsBusy) {
            reject({
                name: 'busyUser',
                message: 'User is busy'
            })
        } else {
            resolve('success')
        }
    })
}

promiseTutorial().then((message) => {
    console.log('success' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})


// async/await
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        if(location === 'Colorado') {
            resolve('success')
        } else {
            reject('failed request')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Proccessing request')
        resolve(`Information + ${response}`)
    })
}

async function asyncRequest() {
    try {
        const response = await makeRequest('Colorado')
        console('response was recieved')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    } 
}
asyncRequest()
