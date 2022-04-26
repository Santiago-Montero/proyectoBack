
import interceptor from '../auth/interceptor'


export const buyCart = (user, products, price) =>{
    return new Promise ((resolve, reject) => {
        const cart = { user, products, price }
        console.log(cart)
        interceptor.post('/cart', cart)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}