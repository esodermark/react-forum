import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: var(--primary-green);
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: var(--border);
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8rem;
    z-index: 1;
    width: 100%;
    padding: 0 2.4rem;
    max-width: 110rem;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 2.4rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--h1-pink);
    text-decoration: none;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 2.2rem;
`

export const NavItem = styled.li`
    height: 8rem;
    margin-right: 3rem;
`

export const NavLinks = styled(LinkR)`
    color: var(--h1-dark);
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.6rem;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`