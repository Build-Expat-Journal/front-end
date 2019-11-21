import axios from 'axios';

axios.interceptors.response.use(res => {
    if (res.data.token) {
        localStorage.setItem('token', res.data.token)
    }
    return res
})
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://cors-anywhere.herokuapp.com/https://bw-expat-journal-ls.herokuapp.com/api',
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    })
};