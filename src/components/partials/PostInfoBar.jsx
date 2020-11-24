import React, { useState, useEffect } from 'react'
import ReactCountryFlag from 'react-country-flag'

import {
    BarContainer,
    Country,
    Created,
    RepliesCount,
    ViewsCount,
    LastVisited
} from './elements/PostInfoBarElements'

const PostInfoBar = ({ post }) => {
    const [countryCode, setCountryCode] = useState('US')
    const [createdAt, setCreatedAt] = useState(null)
    const [lastVisitedAt, setLastVisitedAt] = useState(null)

    const renderCountry = (country) => {
        switch (country) {
            case 0:
                return setCountryCode('SE')
            case 1:
                return setCountryCode('DK')
            case 2:
                return setCountryCode('NO')
            case 3:
                return setCountryCode('FI')
            case 4:
                return setCountryCode('DE')
        }
    }

    const convertDateAndTime = (timeStamp) => {
        const date = new Date(timeStamp)
        const time = timeStamp.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")
        return `${date.toDateString()} ${time}`
    }

    useEffect(() => {
        renderCountry(post.country)
        setCreatedAt(convertDateAndTime(post.createdAt))
        setLastVisitedAt(convertDateAndTime(post.updatedAt))
    }, [])

    return (
        <BarContainer>
            <Country>
                <ReactCountryFlag style={{ fontSize: '1.5rem' }}
                    countryCode={countryCode} svg />
            </Country>
            <Created>
                created <br />
                {createdAt}
            </Created>
            <RepliesCount>
                <strong>{post.countResponses}</strong> <br />
                Replies
            </RepliesCount>
            <ViewsCount>
                <strong>{post.viewCount}</strong> <br />
                Views
            </ViewsCount>
            <LastVisited>
                last visited <br />
                {lastVisitedAt}
            </LastVisited>
        </BarContainer>
    )
}

export default PostInfoBar
