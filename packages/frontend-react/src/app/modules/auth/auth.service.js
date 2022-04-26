import axios from 'axios'

export const postLogin = (user) =>{
    return new Promise ((resolve, reject) => {
        axios.post('http://localhost:8080/user/login', user)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const postSignup = (user) =>{
    return new Promise ((resolve, reject) => {
        axios.post('http://localhost:8080/user/singup', user)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const getUser = (username) => {
    return new Promise ((resolve, reject) => {
        axios.get('http://localhost:8080/user/'+username)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}
