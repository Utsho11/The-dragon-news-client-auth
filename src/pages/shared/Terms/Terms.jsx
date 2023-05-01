import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='text-center'>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Sunt quidem esse omnis ullam saepe aliquam consequatur <br /> atque, adipisci tenetur amet reiciendis corrupti natus magnam sint. <br /> Assumenda itaque facere explicabo doloremque.</p>
            <br />
            <Link to="/register"><Button variant="danger" type="submit">Go back to register</Button></Link>
        </Container>
    );
};

export default Terms;