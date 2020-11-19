import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PostContext } from '../contexts/PostContext'
import Category from '../components/baseComponents/Category'

import {
    PostListContainer,
    NewPostLinkWrapper,
    NewPostLink,
    PostListWrapper,
    PostListItem,
    Topic,
    Author,
    Footer
} from './elements/PostListElements'


const PostList = () => {
    const { posts } = useContext(PostContext)

    const history = useHistory()

    const handleClick = () => {
        history.push('/posts/create')
    }

    const redirect = (id) => {
        history.push(`/post/${id}`)
    }

    return (
        <>
            {posts && (
                <PostListContainer>
                    <NewPostLinkWrapper>
                        <NewPostLink onClick={handleClick} value="New post" />
                    </NewPostLinkWrapper>
                    <PostListWrapper>
                        {posts.map((post, i) => {
                            return (
                                <PostListItem onClick={() => redirect(post.id)} key={i}>
                                    <Topic>{post.title}</Topic>
                                    <Footer>
                                        <Category category={post.category} />
                                        <Author>{post.author && (post.author.firstName)}</Author>
                                    </Footer>
                                </PostListItem>
                            )
                        }
                        )}
                    </PostListWrapper>
                </PostListContainer>
            )}
        </>

    )
}

export default PostList
