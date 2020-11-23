import React, { useContext } from 'react'
import { useHistory, userHistory } from 'react-router-dom'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks
} from './elements/NavbarElements'
import { UserContext } from '../../contexts/UserContext'

const Navbar = () => {
    const { user, setUser } = useContext(UserContext)
    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('token')
        setUser({})
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>FORUM</NavLogo>
                    <NavMenu>
                        {user.firstName ? (
                            <>
                                <NavItem>
                                    <NavLinks to='/' onClick={logOut}>Logout</NavLinks>
                                </NavItem>
                            </>
                        ) : (
                                <>
                                    <NavItem>
                                        <NavLinks to="/register">Register</NavLinks>
                                    </NavItem>
                                    <NavItem>
                                        <NavLinks to="/login">Sign in</NavLinks>
                                    </NavItem>
                                </>
                            )}

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
