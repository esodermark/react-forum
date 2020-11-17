import React, { createContext, useState, useEffect } from 'react'
import ApiClient from '../data/api-client'

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState(null)

    const getPostList = async() => {
        const postList = await ApiClient.GetPostList()
        setPosts(postList)
    }

    const addPost = async(newPost) => {
        ApiClient.CreatePost(newPost)
        // TODO: try/catch handle error if post could not be created
        setPosts(...posts, newPost)
    }

    const addReply = async(reply, id) => {
        ApiClient.CreateReply(reply, id)

        const index = posts.findIndex(post => post.id == id)
        const updatedPosts = posts
        updatedPosts[index].reply = reply
        
        setPosts(updatedPosts)
    }

    return (
        <>
            <PostContext.Provider value={{ getPostList, addPost, addReply }}>
                {children}
            </PostContext.Provider>
        </>
    )
}

export default PostContextProvider
