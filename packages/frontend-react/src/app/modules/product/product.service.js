import interceptor from '../auth/interceptor'

export const getProducts = (category) =>{
    return new Promise ((resolve, reject) => {
        if(category === undefined){
            category = ''
        }else{
            category = `/category/${category}`
        }
        interceptor.get(`/products${category}`)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const getProduct = (id) =>{
    return new Promise ((resolve, reject) => {
        interceptor.get(`/products/${id}`)
        .then((res) => {
            console.log(res)
            resolve(res.data)
        }).catch((error) => {
                reject('Error : ', error)
        })
    })
}

export const updateProduct = (id, product) =>{
    return new Promise ((resolve, reject) => {
        interceptor.patch(`/products/${id}/update`, product)
        .then((res) => {
            console.log(res)
            resolve(res.data)
        }).catch((error) => {
                reject('Error : ', error)
        })
    })
}

export const createProduct = (product) =>{
    return new Promise ((resolve, reject) => {
        interceptor.post(`/products`, product)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const deleteProduct = (id) =>{
    return new Promise ((resolve, reject) => {
        interceptor.delete(`/products/${id}/delete`)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}