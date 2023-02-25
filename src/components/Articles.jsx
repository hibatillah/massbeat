import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ArticleCard } from './Card';
import { PageTitle } from "./Title";
import Load from './Loading';
import NT from "./NotFound";

const Article = (props) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([
        {
            id: 1, 
            title: "Mengatur pola hidup sehat", 
            source: "Detik.com", 
            date: "12 Desember 2022", 
            image: "https://source.unsplash.com/random/?health"
        },
        {
            id: 2, 
            title: "Berapa kebutuhan cairan tubuh?", 
            source: "Detik.com", 
            date: "12 Desember 2022", 
            image: "https://source.unsplash.com/random/drink?"
        },
        {
            id: 3, 
            title: "Mengenal BMI dan cara menghitungnya", 
            source: "Detik.com", 
            date: "12 Desember 2022", 
            image: "https://source.unsplash.com/random/mass?"
        },
        {
            id: 4, 
            title: "Olahraga sebagai cara mengatur pola hidup yang sehat", 
            source: "Detik.com", 
            date: "12 Desember 2022", 
            image: "https://source.unsplash.com/random/?sport"
        },
        {
            id: 5, 
            title: "Mengatur pola hidup sehat", 
            source: "Detik.com", 
            date: "12 Desember 2022", 
            image: "https://source.unsplash.com/random/?life"
        },
        {
            id: 6, 
            title: "Mengatur pola hidup sehat", 
            source: "Detik.com", 
            date: "12 Desember 2022", 
            image: "https://source.unsplash.com/random/?training"
        },
        {
            id: 7, 
            title: "Mengatur pola hidup sehat", 
            source: "Detik.com", 
            date: "12 Desember 2022", 
            image: "https://source.unsplash.com/random/?workout"
        }
    ]);

    // useEffect(() => {
    //     fetch('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=4ccb5c14cc0446dbb4bf2f1e1d6d62c4')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setArticles(data)
    //         })
    //         .catch(err => setError(true))
    //         .finally(() => setLoading(false))
    // },[])
    
    return (
        <div className='w-full h-full px-4'>
            <PageTitle title="Artikel" />
            {/* {loading && <Load />}
            {error && <NT />} */}
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