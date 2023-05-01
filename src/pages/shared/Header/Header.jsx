import React from 'react';
import logo from '../../../assets/images/logo.png'
import moment from 'moment'
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mb-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd,")}<span className='text-secondary'>{moment().format("MMMM D,yyyy")}</span></p>                
            </div>
            <div className='d-flex p-4'>
                <Button variant='danger'>Latest</Button><Marquee className='text-danger' speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;