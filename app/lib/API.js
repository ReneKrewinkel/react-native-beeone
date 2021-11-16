
class API {

    static fetchData = () => new Promise(  (resolve, reject) => {

        let url = "https://api.code-ninja.online/fetch/onderhoud"

        fetch(url)
        .then( result => result.json() )
        .then( data => {
            resolve(data)
        })
        .catch( err => {
            reject(err)
        })
    })


}


export default API