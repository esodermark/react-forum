import styled from 'styled-components'
import { Button } from '../../baseElements/Button'
import { InputSubmit } from '../../baseElements/Input'

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

export const TextArea = styled.textarea`
    width: 100%;
    height: 15rem;
    margin: 4rem 0 0 0;
    border: var(--border);
    font-size: 1.4rem;
    padding: 1rem;
    background: var(--light-gray);
`

export const CancelButton = styled(Button)`
    background: transparent;
    border-style: none;
`