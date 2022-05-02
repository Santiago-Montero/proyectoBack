import axios from 'axios'

const url = 'https://your-box-api.herokuapp.com/'

export const postLogin = (user) =>{
    return new Promise ((resolve, reject) => {
        axios.post(url, user)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const postSignup = (user) =>{
    return new Promise ((resolve, reject) => {
        axios.post(url, user)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const getUser = (username) => {
    return new Promise ((resolve, reject) => {
        axios.get(url+username)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}
