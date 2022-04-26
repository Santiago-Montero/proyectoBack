
import interceptor from '../auth/interceptor'


export const getProducts = () =>{
    return new Promise ((resolve, reject) => {
        interceptor.get('/products')
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const getProduct = (id) =>{
    return new Promise ((resolve, reject) => {
        interceptor.get('/products/'+id)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
                reject('Error : ', error)
        })
    })
}

