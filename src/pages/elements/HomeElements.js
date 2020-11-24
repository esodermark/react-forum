import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
    padding: 10rem 20rem;
    line-height: 2.5rem;
`

export const HomeInfo = styled.p`
    margin-bottom: 2rem;
`

export const PostsLink = styled(Link)`
    font-size: 1.4rem;
    font-weight: bold;
`

export const LoggedInUser = styled.p`
    margin-top: 3rem;
`