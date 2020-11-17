import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ApiClient from '../../api-client'

import { 
    RegisterContainer, 
    RegisterFormWrapper, 
    RegisterForm,
    InputSubmit,
    Input, 
    Label, 
    SubmitWrapper
} from './RegisterElements'

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        await registerUser()

        history.push('/login')
    }

    const registerUser = async () => {
        const user = {
            firstName,
            lastName,
            email,
            password,
            country,
        }

        await ApiClient.CreateUser(user)
    }

    return (
        <RegisterContainer>
        <RegisterFormWrapper>
            <RegisterForm onSubmit={handleSubmit}>
                <Label>firstname</Label>
                <Input
                    type="text" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}>
                </Input>

                <Label>lastname</Label>
                <Input
                    type="text" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}>
                </Input>

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

                <Label>country</Label>
                <Input
                    type="text" value={country}
                    onChange={(e) => setCountry(e.target.value)}>
                </Input>

                <SubmitWrapper>
                    <InputSubmit type="submit" value="Register"></InputSubmit>
                </SubmitWrapper>
            </RegisterForm>
        </RegisterFormWrapper>
    </RegisterContainer>
    )
}

export default RegisterForm
