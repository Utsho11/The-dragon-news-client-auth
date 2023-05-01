import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInside from '../EditorsInside/EditorsInside';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;
    return (
        <div>
            <h2>Dragon News</h2>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <small><Card.Text>
                        {details}
                    </Card.Text></small>
                    <Link to={`/category/${category_id}`}>
                        <Button className='mt-4' variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInside></EditorsInside>
        </div>
    );
};

export default News;