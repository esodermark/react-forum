import Axios from 'axios'

const axiosInstance = Axios.create({
    baseURL: "https://lab.willandskill.eu/api/v1/"
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


// USER
axiosInstance.Register = async(newUser) => {
    await axiosInstance.post('/auth/users/', newUser)
    return true
}

axiosInstance.Login = async(user) => {
    const data = await axiosInstance.post('/auth/api-token-auth/', user)
    localStorage.setItem('token', data.token)
    return true
}

axiosInstance.GetUserInfo = async() => {
    const userInfo = await axiosInstance.get('/me/')
    return userInfo
}


// POSTS
axiosInstance.CreatePost = async(newPost) => {
    await axiosInstance.post('/forum/posts/', newPost)
    return true
}

axiosInstance.CreateReplyToPostById = async(reply, id) => {
    await axiosInstance.post(`/forum/posts/${id}/replies`, reply)
    return true
}

axiosInstance.GetPostList = async() => {
    const postList = await axiosInstance.get('/forum/posts/')
    return postList
}

axiosInstance.GetPostDetailsById = async(id) => {
    const postDetails = await axiosInstance.get(`/forum/posts/${id}/`)
    return postDetails
}

axiosInstance.GetPostReplyListById = async(id) => {
    const replyList = await axiosInstance.get(`/forum/posts/${id}/`)
    return replyList
}



export default axiosInstance