import moment from 'moment/moment';
import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, name, title, author, details, image_url, rating, total_view } = news;
    return (
        <Container>
            <h2>{name}</h2>
            <Card className="my-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image className='me-3' style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='flex-grow-1'>
                        <b>{author ? author.name : 'publisher'}</b>
                        <p className='mb-0'><small className='text-secondary'>{moment(author?.published_date).format('yyyy-MM-DD')}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" />
                    <Card.Text>
                        {details < 250 ? { details } : <>{details.slice(0, 250)}....
                            <b>
                                <Link className='text-warning' to={`/news/${_id}`}>Read More</Link>                  </b></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='d-flex align-items-center flex-grow-1'>
                        <Rating className='text-warning'
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}></Rating>
                        <small className='ms-2'>{rating.number}</small>
                    </div>
                    <div><FaEye></FaEye> {total_view}</div>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default NewsCard;