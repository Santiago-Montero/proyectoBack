import Axios from 'axios'

const url = 'http://localhost:8080';
export const getProducts = () =>{
    return new Promise ((resolve, reject) => {
        Axios({url : url})
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
                reject('Error : ', error)
        })
    })
}

export const getProduct = (id) =>{
    return new Promise ((resolve, reject) => {
        Axios({url : `${url}/${id}`})
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
                reject('Error : ', error)
        })
    })
}

