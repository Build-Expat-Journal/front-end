import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://bw-expat-journal-ls.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
};