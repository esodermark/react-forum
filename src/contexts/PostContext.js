import React, { createContext, useState, useEffect } from 'react'
import ApiClient from '../api-client'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState(null)

    const getPostList = async() => {
        const postList = await ApiClient.GetPostList()
        setPosts(postList.results)
    }

    const addPost = async(newPost) => {
        ApiClient.CreatePost(newPost)
        setPosts([newPost, ...posts])
        getPostList()
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) { getPostList() }
    }, [])

    return (
        <>
            <PostContext.Provider value={{ posts, getPostList, addPost }}>
                {children}
            </PostContext.Provider>
        </>
    )
}

export default PostContextProvider
