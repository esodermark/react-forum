import React, { useState } from 'react'
import ApiClient from '../../api-client'

import {
    ReplyFormContainer,
    ReplyFormWrapper,
    ReplyFormForm,
    ReplyButtonWrapper,
    ReplySubmit,
    TextArea,
    CancelButton
} from './elements/ReplyFormElements'

const ReplyForm = ({ postId, setOpenReply, populatePostData }) => {
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        handlePostReply()

        setOpenReply(false)
    }

    const handlePostReply = async () => {
        const reply = {
            title: '-',
            content,
            parent: postId
        }
        const success = await ApiClient.CreateReply(reply)
        if (success) { populatePostData() }
    }

    return (
        <ReplyFormContainer>
            <ReplyFormWrapper>
                <ReplyFormForm onSubmit={handleSubmit}>
                    <TextArea onChange={(e) => setContent(e.target.value)} placeholder="Type here."></TextArea>
                    <ReplyButtonWrapper>
                        <ReplySubmit value="Reply"></ReplySubmit>
                        <CancelButton onClick={() => setOpenReply(false)}>cancel</CancelButton>
                    </ReplyButtonWrapper>
                </ReplyFormForm>
            </ReplyFormWrapper>
        </ReplyFormContainer>
    )
}

export default ReplyForm
