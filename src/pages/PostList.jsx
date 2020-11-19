import React from 'react'
import { useHistory } from 'react-router-dom'

import {
    PostListContainer,
    NewPostLinkWrapper,
    NewPostLink,
    PostListWrapper,
    PostListItem,
    Topic,
    CategoryContainer,
    CategoryBox,
    Category,
    Author,
    Footer
} from './elements/PostListElements'


const PostList = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/posts/create')
    }
    
    return (
        <PostListContainer>
            <NewPostLinkWrapper>
                <NewPostLink onClick={handleClick} value="New post" />
            </NewPostLinkWrapper>
            <PostListWrapper>
                <PostListItem>
                    <Topic>Does anyone know?</Topic>
                    <Footer>
                        <CategoryContainer>
                            <CategoryBox category="1" />
                            <Category>Specific</Category>
                        </CategoryContainer>
                        <Author>primoridal_black_hole</Author>
                    </Footer>
                </PostListItem>
                <PostListItem>
                    <Topic>Biggest Realizations / Mind Blows You’ve Experienced Learning Japanese: Emoji means what?!?!</Topic>
                    <Footer>
                        <CategoryContainer>
                            <CategoryBox category="1" />
                            <Category>Specific</Category>
                        </CategoryContainer>
                        <Author>primoridal_black_hole</Author>
                    </Footer>
                </PostListItem>
                <PostListItem>
                    <Topic>Does anyone know the difference between
 general and nonspecific categories?</Topic>
                    <Footer>
                        <CategoryContainer>
                            <CategoryBox category="1" />
                            <Category>Specific</Category>
                        </CategoryContainer>
                        <Author>primoridal_black_hole</Author>
                    </Footer>
                </PostListItem>
                <PostListItem>
                    <Topic>Does anyone know the difference between
 general and nonspecific categories?</Topic>
                    <Footer>
                        <CategoryContainer>
                            <CategoryBox category="1" />
                            <Category>Specific</Category>
                        </CategoryContainer>
                        <Author>primoridal_black_hole</Author>
                    </Footer>
                </PostListItem>
            </PostListWrapper>
        </PostListContainer>
    )
}

export default PostList
