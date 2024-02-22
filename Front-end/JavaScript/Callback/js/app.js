// *call back
function programCal() {
    function calculate(x, y, callback) {
        setTimeout(() => {
            const sum = x + y
            callback(sum)
        }, 500)
    }

    console.log(calculate(100, 50, function (result) {
        console.log(`ผลบวก  =${result}`)
    }))

}
// programCal()


function programDownloadFile() {

    const file = "Nitiwat@gmail.com"
    const sound = "Hels.mp4"
    const image = "Popup.jpg"

    function downloading(url, callback) {
        console.log(`Downloading ${url}`)
        setTimeout(() => {
            callback(url)
        }, 1000)
    }

    downloading(file, (result) => {
        console.log(`Download ${result} complete !!`)

        downloading(sound, (result) => {
            console.log(`Download ${result} complete !!`)

            downloading(image, (result) => {
                console.log(`Download ${result} complete !!`)
            })
        })

    })

}
// programDownloadFile()


//* Promise

function downloadingPromise() {

    const connect = true
    const url1 = 'https//Ntiwat/1'
    const url2 = 'https//Ntiwat/2'
    const url3 = 'https//Ntiwat/3'


    const downloading = (url) => {
        return new Promise(function (resolve, reject) {
            console.log(`downloading ${url}`)
            setTimeout(() => {
                if (connect) {
                    resolve(`Downloaded ${url} `)
                } else {
                    reject(`Error download`)
                }
            }, 2000)

        })
    }
    downloading(url1)
        .then(result => {
            console.log(result);
            return downloading(url2)
        })
        .then(result => {
            console.log(result);
            return downloading(url3)
        })
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })


}
downloadingPromise()


//* Async & Await

function downloadAsync() {

    const connect = true
    const url1 = 'https//Ntiwat/1'
    const url2 = 'https//Ntiwat/2'
    const url3 = 'https//Ntiwat/3'

    const downloading = (url) => {
        return new Promise(function (resolve, reject) {
            console.log(`downloading ${url}`)
            setTimeout(() => {
                if (connect) {
                    resolve(`Downloaded ${url} `)
                } else {
                    reject(`Error download`)
                }
            }, 2000)

        })
    }


    const start = async () => {
        console.log(await downloading(url1))
        console.log(await downloading(url2))
        console.log(await downloading(url3))
    }
    start()

}
// downloadAsync()