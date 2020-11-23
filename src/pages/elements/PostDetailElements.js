import styled from 'styled-components'
import { Button } from '../../components/baseElements/Button'

export const PostDetailContainer = styled.div`
    padding: 7rem 20rem;
`

export const PostDetailWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
`

export const PostContainer = styled.div`
    
`

export const Header = styled.div`
    padding: 0 .5rem;
`

export const Topic = styled.h1`
    font-size: 2rem;
    margin-bottom: .5rem;
`

export const PostContentContainer = styled.div`
        background: var(--light-green);
        padding: 2rem;
        margin-top: 1rem;
`

export const TopicStarterName = styled.h3`
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
`

export const PostContent = styled.p`

`

export const ReplyButtonWrapper = styled.div`
    text-align: right;
    margin-bottom: 2rem;
`

export const ReplyButton  = styled(Button)`
    background: var(--light-gray);
`

export const RepliesContainer = styled.div`

`

export const ReplyItem = styled.div`
    padding: 1rem 2rem 4rem 2rem;
    border-top: var(--border-light);

    :not(:last-child) {
        
    }
`

export const ReplierName = styled.h4`
    font-size: 1.3rem;
    margin-bottom: 1rem;
`

export const Content = styled.p`

`
