import axios from 'axios';

const url = 'https://your-box-api.herokuapp.com/';
const interceptor = axios.create({baseURL: url });
interceptor.interceptors.request.use(request => {
    const token = localStorage.getItem('token');
    if(token){
        request.headers.common.Authorization = `Bearer ${token}`;
    }else{
        throw new Error('Log In !')
    }
    return request;
});
interceptor.interceptors.response.use(response => {
    return response;
});

export default interceptor;