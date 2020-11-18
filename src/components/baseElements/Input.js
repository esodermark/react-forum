import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  margin-top: .5rem;
  border: var(--border);
  font-size: 1.4rem;
`

export const SubmitWrapper = styled.div`
    text-align: center;
`

export const InputSubmit = styled.input.attrs(props => ({
    type: "submit"
}))`
  width: 15rem;
  padding: 1rem;
  box-sizing: border-box;
  margin-top: 3rem;
  background: var(--primary-button);
  border: var(--border);
  font-size: 1.6rem;
  cursor: pointer;
`

export const Label = styled.label`
    
`