import React from 'react'

import {
    PostListContainer,
    PostListWrapper,
    PostListItem,
    Topic,
    CategoryContainer,
    CategoryBox,
    Category,
    Author
} from './elements/PostListElements'

const PostList = () => {
    return (
        <PostListContainer>
            <PostListWrapper>
                <PostListItem>
                    <Topic>Does anyone know the difference between
 general and nonspecific categories?</Topic>
                    <CategoryContainer>
                        <CategoryBox category="1"/>
                        <Category/>
                    </CategoryContainer>
                    <Author>primoridal_black_hole</Author>
                </PostListItem>
            </PostListWrapper>
        </PostListContainer>
    )
}

export default PostList
