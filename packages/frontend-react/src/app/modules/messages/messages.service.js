import interceptor from '../auth/interceptor'

export const saveMessage = (messageBody) =>{
    return new Promise ((resolve, reject) => {
        interceptor.post(`/msg`, messageBody)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const getMessages = (username) =>{
    return new Promise ((resolve, reject) => {
        interceptor.get(`/msg/${username}`)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}
