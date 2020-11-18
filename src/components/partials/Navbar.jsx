import React, { useContext } from 'react'
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
    const { user } = useContext(UserContext)
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>FORUM</NavLogo>
                    <NavMenu>
                        {user.firstName ? (
                            <>
                                <NavItem>
                                    <NavLinks to="/logout">Logout</NavLinks>
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
