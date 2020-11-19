import styled from 'styled-components'
import { 
    InputSubmit,
    SubmitWrapper
} from '../../components/baseElements/Input'


export const PostListContainer = styled.div`
    padding: 2rem 4rem;
`

export const NewPostLinkWrapper = styled(SubmitWrapper)`
    text-align: right;
`

export const NewPostLink = styled(InputSubmit)`
    margin: 0;
`

export const PostListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`

export const PostListItem = styled.div`
    flex: 0 49%;
    background: var(--light-green);
    border: var(--border);
    margin-top: 1rem;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    position: relative;

    &:hover {
        cursor: pointer;
    }
`

export const Topic = styled.h2`
    font-size: 1.7rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Author = styled.p`
    color: var(--secondary-p);
    font-size: 1.4rem;
`