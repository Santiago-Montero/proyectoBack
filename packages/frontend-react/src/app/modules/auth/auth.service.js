import interceptor from './interceptor'


export const postLogin = (user) =>{
    return new Promise ((resolve, reject) => {
        interceptor.post('user/login', user)
        .then((res) => {
            localStorage.setItem('token', res.data)
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

