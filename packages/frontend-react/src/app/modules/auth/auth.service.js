import axios from 'axios'


const url = 'https://your-box-api.herokuapp.com/'
//const url = 'http://localhost:8080/'
export const postLogin = (user) =>{
    return new Promise ((resolve, reject) => {
        axios.post(`${url}user/login`, user)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const postSignup = (user) =>{
    return new Promise ((resolve, reject) => {
        axios.post(`${url}user/signup`, user)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}

export const getUser = (username) => {
    return new Promise ((resolve, reject) => {
        axios.get(`${url}user/${username}`)
        .then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject('Error : ', error)
        })
    })
}