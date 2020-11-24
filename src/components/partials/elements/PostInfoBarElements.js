import styled from 'styled-components'

export const BarContainer = styled.div`
    display: inline-flex;
    justify-content: space-between;
    background: var(--light-gray);
    padding: 1rem 2rem;
    margin-top: 2rem;
    margin-bottom: .5rem;
    border: var(--border-light);
    
    & > div {
        color: var(--secondary-p);
        font-size: 1.2rem;
        
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    }
`

export const Country = styled.div`

`

export const Created = styled.div`

`

export const RepliesCount = styled.div``

export const ViewsCount = styled.div``

export const LastVisited = styled.div``