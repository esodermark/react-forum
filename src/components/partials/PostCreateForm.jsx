import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PostContext } from '../../contexts/PostContext'

import {
    PostCreateContainer,
    PostCreateWrapper,
    PostCreateFormForm,
    TextArea
} from './elements/PostCreateFormElements'

import {
    InputSubmit,
    Input,
    Label,
    SubmitWrapper,
    SelectMenu,
    Select,
    Option
} from '../baseElements/Input'

const PostCreateForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState(1)

    const { addPost } = useContext(PostContext)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()

        handleAddPost()
    }

    const handleAddPost = () => {
        const newPost = {
            title,
            content,
            category
        }

        addPost(newPost)
        history.push('/posts')
    }

    return (
        <>
            <PostCreateContainer>
                <PostCreateWrapper>
                    <PostCreateFormForm onSubmit={handleSubmit}>
                        <Label>title</Label>
                        <Input
                            type="text" value={title} required
                            onChange={(e) => setTitle(e.target.value)}>
                        </Input>

                        <Label>content</Label>
                        <TextArea required 
                            onChange={(e) => setContent(e.target.value)}>
                        </TextArea>

                        <Label>category</Label>
                        <SelectMenu>
                            <Select onChange={(e) => setCategory(e.target.value)}>
                                <Option value="1">Specific</Option>
                                <Option value="2">General</Option>
                                <Option value="3">Nonspecific</Option>
                            </Select>
                        </SelectMenu>

                        <SubmitWrapper>
                            <InputSubmit type="submit" value="Create post"></InputSubmit>
                        </SubmitWrapper>
                    </PostCreateFormForm>
                </PostCreateWrapper>
            </PostCreateContainer>
        </>
    )
}

export default PostCreateForm
