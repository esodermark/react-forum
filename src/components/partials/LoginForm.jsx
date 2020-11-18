import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ApiClient from '../../api-client'
import { PostContext } from '../../contexts/PostContext'
import { UserContext } from '../../contexts/UserContext'

import { 
    LoginContainer, 
    LoginFormForm,
    ErrorMessage,
 } from './elements/LoginFormElements'

 import { 
     InputSubmit, 
     Input, 
     Label, 
     SubmitWrapper
} from '../baseElements/Input'


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const { getPostList } = useContext(PostContext)
    const { setUserContext } = useContext(UserContext)

    const history = useHistory()


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
            setErrorMessage(null)
            history.push('/posts')
            getPostList()
        } else {
            setErrorMessage('Unable to login with provided credentials')
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

                {errorMessage && (
                    <ErrorMessage>
                        {errorMessage}
                    </ErrorMessage>
                )}

                <SubmitWrapper>
                    <InputSubmit type="submit" value="Login"></InputSubmit>
                </SubmitWrapper>
            </LoginFormForm>
        </LoginContainer>
    )
}

export default LoginForm
