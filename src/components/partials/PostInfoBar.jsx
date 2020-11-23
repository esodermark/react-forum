import React, { useState, useEffect } from 'react'
import ReactCountryFlag from 'react-country-flag'

import {
    BarContainer,
    Country,
    Created,
    RepliesCount,
    ViewsCount
} from './elements/PostInfoBarElements'

const PostInfoBar = ({ post }) => {
    const [countryCode, setCountryCode] = useState()

    const renderCountry = (country) => {
        switch (country) {
            case 1:
                return setCountryCode('SE')
        }
    }

    useEffect(() => {
        renderCountry(post.country)
    }, [])

    return (
        <BarContainer>
            <Country>
                    <ReactCountryFlag style={{ fontSize: '1.5rem' }}
                    countryCode={countryCode ? countryCode : 'US'} svg />
            </Country>
            <Created>{post.createdAt}</Created>
            {/* <LastReply>{post.updatedAt}</LastReply> */}
            <RepliesCount>{post.countResponses}</RepliesCount>
            <ViewsCount>{post.viewCount}</ViewsCount>
        </BarContainer>
    )
}

export default PostInfoBar
