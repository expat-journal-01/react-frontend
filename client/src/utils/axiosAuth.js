import axios from 'axios';

export const axiosAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: token
        },
        baseUrl: "http://backend-expat-journal.herokuapp.com"
    })
}