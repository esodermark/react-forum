import React from 'react'
import Category from '../components/baseComponents/Category'

import {
    PostDetailContainer,
    PostDetailWrapper,
    PostContainer,
    Header,
    PostContentContainer,
    TopicStarterName,
    PostContent,
    Topic,
    RepliesContainer,
    ReplyItem,
    ReplierName,
    Content
} from './elements/PostDetailElements'

const PostDetail = () => {
    return (
        <PostDetailContainer>
            <PostDetailWrapper>
                <PostContainer>
                    <Header>
                        <Topic>Does anyone know the difference between..?</Topic>
                        <Category category="1" />
                    </Header>
                    <PostContentContainer>
                        <TopicStarterName>primordial_black_hole</TopicStarterName>
                        <PostContent>
                            I'm really confused by this, could anyone please help me?
                        </PostContent>
                    </PostContentContainer>
                </PostContainer>
                <RepliesContainer>
                    <ReplyItem>
                        <ReplierName>anon</ReplierName>
                        <Content>I guess there is a nuanced difference, but what the heck. Write where you feel like it</Content>
                    </ReplyItem>
                    <ReplyItem>
                        <ReplierName>anon</ReplierName>
                        <Content>I guess there is a nuanced difference, but what the heck. Write where you feel like it</Content>
                    </ReplyItem>
                </RepliesContainer>
            </PostDetailWrapper>
        </PostDetailContainer>
    )
}

export default PostDetail
