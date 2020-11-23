import React, { useState, useEffect } from 'react'
import Category from '../components/baseComponents/Category'
import ApiClient from '../api-client'
import ReplyForm from '../components/partials/ReplyForm'
import PostInfoBar from '../components/partials/PostInfoBar'

import {
    PostDetailContainer,
    PostDetailWrapper,
    PostContainer,
    Header,
    PostContentContainer,
    TopicStarterName,
    PostContent,
    Topic,
    ReplyButton,
    ReplyButtonWrapper,
    RepliesContainer,
    ReplyItem,
    ReplierName,
    Content
} from './elements/PostDetailElements'




const PostDetail = (props) => {
    const id = parseInt(props.match.params.id)

    const [post, setPost] = useState(null)
    const [openReply, setOpenReply] = useState(false)

    const populatePostData = async () => {
        const postData = await ApiClient.GetPostDetailsById(id)
        console.log(postData)
        setPost(postData)
    }

    useEffect(() => {
        populatePostData()
    }, [])


    return (
        <>
            {post && (
                <PostDetailContainer>
                    <PostDetailWrapper>
                        <PostContainer>
                            <Header>
                                <Topic>{post.title}</Topic>
                                <Category category={post.category.id} />
                            </Header>
                            <PostContentContainer>
                                <TopicStarterName>{post.author && (post.author.firstName)}</TopicStarterName>
                                <PostContent>
                                    {post.content}
                                </PostContent>
                            </PostContentContainer>
                            <PostInfoBar post={post} />
                            {openReply ? (
                                <ReplyForm postId={post.id} setOpenReply={setOpenReply} populatePostData={populatePostData}/>
                            ) : (
                                <ReplyButtonWrapper>
                                    <ReplyButton onClick={() => setOpenReply(true)}>Reply</ReplyButton>
                                </ReplyButtonWrapper>
                            )}
                        </PostContainer>
                        <RepliesContainer>
                            {post.responses && (
                                post.responses.map((reply, i) => {
                                    return (
                                        <ReplyItem key={i}>
                                            <ReplierName>{reply.author.firstName}</ReplierName>
                                            <Content>{reply.content}</Content>
                                        </ReplyItem>
                                    )
                                })
                            )}
                        </RepliesContainer>
                    </PostDetailWrapper>
                </PostDetailContainer>
            )}
        </>

    )
}

export default PostDetail
