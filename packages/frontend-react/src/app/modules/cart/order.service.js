import interceptor from '../auth/interceptor'


export const generateOrder = (username, price, cart) =>{
    return new Promise ((resolve, reject) => {
        const order = { username, price, cart }
        interceptor.post('/order', order)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const getOrders = (username) =>{
    return new Promise ((resolve, reject) => {
        interceptor.get(`/order/${username}`)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}
