import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/images/bg.png'
const RightNav = () => {
    return (
        <div>
            <h5>Login with</h5>
            <Button className='mt-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button className='my-2' variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            <div className='my-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='text-primary'/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary'/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-danger'/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='position-relative'>
                <img src={bg} alt="" />
            <div className='text-center text-white position-absolute top-0 mt-5 pt-5'>
                <h2>Create an Amazing Newspaper</h2>
                <p><small>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
                <Button variant='danger'>Learn More</Button>
            </div>
            </div>
        </div>
    );
};

export default RightNav;