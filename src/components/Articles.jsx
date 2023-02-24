import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ArticleCard } from './Card';
import { PageTitle } from "./Title";
import Load from './Loading';
import NT from "./NotFound";

const Article = (props) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/articles')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setArticles(data)
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    },[])
    
    return (
        <div className='w-full h-full px-2'>
            <PageTitle title="Artikel" />
            {loading && <Load />}
            {error && <NT />}
            <div className="flex flex-col gap-2">
                {articles.map((article) => (
                    <ArticleCard 
                        article={article}
                    />
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default Article;