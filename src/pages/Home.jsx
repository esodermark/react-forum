import React from 'react'

import { H1, P } from '../components/baseElements/Typography'
import { PostListLink } from './HomeElements'

const Home = () => {
    return (
        <>
            <H1 color="primary">Welcome to the forum</H1>
            <P color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid sapiente voluptatibus ipsum, deleniti nostrum reprehenderit unde distinctio in sunt natus ab saepe culpa exercitationem. Eaque sunt perspiciatis labore temporibus?</P>
            <PostListLink>Start reading posts now</PostListLink>
        </>
    )
}

// TODO: show logged in user

export default Home
