import React, { useState, useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'

const PostCreateForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')

    const { addPost } = useContext(PostContext)


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
    }

    return (
    //     <PostCreateContainer>
    //     <PostCreateFormForm onSubmit={handleSubmit}>
    //         <Label>title</Label>
    //         <Input
    //             type="text" value={title} required
    //             onChange={(e) => setTitle(e.target.value)}>
    //         </Input>

    //         <Label>content</Label>
    //         <Input
    //             type="text" name="content" value={content} required
    //             onChange={(e) => setContent(e.targeContent)}>
    //         </Input>

    //         <SelectMenu>
    //             <Select onChange={(e) => setCategory(e.target.value)}>
    //                 <Option value="0">General</Option>
    //                 <Option value="1">Specific</Option>
    //                 <Option value="2">Nonspecific</Option>
    //             </Select>
    //         </SelectMenu>

    //         <SubmitWrapper>
    //             <InputSubmit type="submit" value="Create post"></InputSubmit>
    //         </SubmitWrapper>
    //     </PostCreateFormForm>
    // </PostCreateContainer>
    <>
    </>
    )
}

export default PostCreateForm
