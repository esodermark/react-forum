import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

import {
    HomeContainer,
    HomeInfo,
    PostsLink,
    LoggedInUser
} from './elements/HomeElements'

import {
    H1
} from '../components/baseElements/Typography'

const Home = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <HomeContainer>
                <H1>Welcome to the forum</H1>
                <HomeInfo>
                    Rules: <br />
                    1. Have fun <br />
                    2. Be kind <br />
                    3. Do not spam unless you're testing code
                </HomeInfo>
                <PostsLink to="/posts">Go to posts &#8594;</PostsLink>
                {user.firstName && (
                    <LoggedInUser>
                        Logged in as: {user.firstName}
                    </LoggedInUser>
                )}
            </HomeContainer>
            {/* <H1 color="primary">Welcome to the forum</H1>
            <P color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid sapiente voluptatibus ipsum, deleniti nostrum reprehenderit unde distinctio in sunt natus ab saepe culpa exercitationem. Eaque sunt perspiciatis labore temporibus?</P>
            <PostListLink>Start reading posts now</PostListLink> */}
        </>
    )
}

// TODO: show logged in user

export default Home
