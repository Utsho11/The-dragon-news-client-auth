import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../../../assets/images/1.png';
import second from '../../../assets/images/2.png';
import third from '../../../assets/images/3.png';
import { FaRegCalendar } from 'react-icons/fa';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h5>All Category</h5>
            <div className='ps-4'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <div>
                <Row xs={1} md={1} lg={1} className="mt-4 g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <FaRegCalendar></FaRegCalendar> <span><small>Jan 4, 2022</small></span>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <FaRegCalendar></FaRegCalendar> <span><small>Jan 4, 2022</small></span>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <FaRegCalendar></FaRegCalendar> <span><small>Jan 4, 2022</small></span>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LeftNav;