import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';
import { Button } from 'react-bootstrap';

const Category = () => {
    const { id,name } = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                    name={name}></NewsCard>)
            }
        </div>
    );
};

export default Category;