import React, { useState, useContext } from 'react'
import ApiClient from '../../api-client'

import { 
    LoginContainer, 
    LoginForm,
    InputSubmit, 
    Input, 
    Label, 
    SubmitWrapper
 } from './LoginFormElements'


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { getPostList } = useContext(PostContext)
    const { setUserContext } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()

        login()
    }

    const login = async () => {
        const user = {
            email,
            password
        }
        const success = await ApiClient.Login(user)
        if (success) { 
            setUserContext()
            redirect('/posts') 
            getPostList()
        }
    }

    return (
        <LoginContainer>
            <LoginFormForm onSubmit={handleSubmit}>
                <Label>email</Label>
                <Input
                    type="email" value={email} required
                    onChange={(e) => setEmail(e.target.value)}>
                </Input>

                <Label>password</Label>
                <Input
                    type="password" name="password" value={password} required
                    onChange={(e) => setPassword(e.target.value)}>
                </Input>
                <SubmitWrapper>
                    <InputSubmit type="submit" value="Login"></InputSubmit>
                </SubmitWrapper>
            </LoginFormForm>
        </LoginContainer>
    )
}

export default LoginForm
