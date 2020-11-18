import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ApiClient from '../../api-client'

import {
    RegisterContainer, 
    RegisterFormWrapper, 
    RegisterFormForm
} from './elements/RegisterFormElements'

import { 
    InputSubmit, 
    Input, 
    Label, 
    SubmitWrapper
} from '../baseElements/Input'

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await registerUser()
        history.push('/login')
    }

    const registerUser = async () => {
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            country
        }

        await authAdmin()
        await ApiClient.Register(newUser)
        removeAdminToken()
    }

    const authAdmin = async () => {
        const adminUser = {
            email: 'pelle@willandskill.se',
            password: 'pellesvanslos'
        }
        await ApiClient.Login(adminUser)
    }

    const removeAdminToken = () => {
        localStorage.removeItem('token')
    }

    return (
        <RegisterContainer>
        <RegisterFormWrapper>
            <RegisterFormForm onSubmit={handleSubmit}>
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
            </RegisterFormForm>
        </RegisterFormWrapper>
    </RegisterContainer>
    )
}

export default RegisterForm
