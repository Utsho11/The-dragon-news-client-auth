import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../../../assets/images/editorsInsight1.png'
import second from '../../../assets/images/editorsInsight2.png'
import third from '../../../assets/images/editorsInsight3.png'
import { FaRegCalendar } from 'react-icons/fa';

const EditorsInside = () => {
    return (
        <div className='mt-4'>
            <h4>Editors Insight</h4>
        <Row xs={1} md={2} lg={3} className="mt-1 g-4">
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
    );
};

export default EditorsInside;