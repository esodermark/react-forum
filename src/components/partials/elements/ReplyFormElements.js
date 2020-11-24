import styled from 'styled-components'
import { Button } from '../../baseElements/Button'
import { InputSubmit, BaseTextArea } from '../../baseElements/Input'

export const ReplyFormContainer = styled.div``

export const ReplyFormWrapper = styled.div``

export const ReplyFormForm = styled.form``

export const ReplyButtonWrapper = styled.div`
    margin-bottom: 2rem;
`

export const ReplySubmit = styled(InputSubmit)`
    width: 10rem;
    padding: .5rem;
    background: var(--primary-green);
    margin-top: .5rem;
`

export const TextArea = styled(BaseTextArea)`
    background: var(--light-gray);
    margin-top: 1rem;
`

export const CancelButton = styled(Button)`
    background: transparent;
    border-style: none;
`

export const TitleInput = styled.input`
    margin: 0;
    width: 50%;
    height: 2rem;
    border: var(--border);
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
`

export const TitleInputContainer = styled.div`
    margin-top: 4rem;
`