import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/authProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <Container>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="mx-auto gap-4">
                        <Link className=' text-decoration-none text-secondary' to="/">Home</Link>
                        <Link className=' text-decoration-none text-secondary' to="/">About</Link>
                        <Link className=' text-decoration-none text-secondary' to="/">Career</Link>
                    </Nav>
                    {
                        user && <FaUserCircle className='me-1' style={{fontSize:'2rem'}}></FaUserCircle>
                    }
                    {
                        user ? <Button onClick={handleLogout} variant="dark">Logout</Button>
                            : <Link to="/login">
                                <Button variant="dark">Log in</Button>
                              </Link>
                    }
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;