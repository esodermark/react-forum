import Axios from 'axios'

const axiosInstance = Axios.create({
    baseURL: "https://lab.willandskill.eu/"
})


axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token !== null) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (err) {
    return Promise.reject(err)
})

axiosInstance.interceptors.response.use((response) => {
    return response.data
}, function (err) {
    return Promise.reject(err)
})


