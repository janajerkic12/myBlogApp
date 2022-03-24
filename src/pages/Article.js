import React from 'react';
import Articles from '../components/Articles';
import articleContent from './article-content';

const Article = () => {

    const article = articleContent.find((article) => article.name === 'learn-react');
    const otherArticle = articleContent.filter((article) => article.name !== 'learn-react');

    if(!article) return <h1>Article does not exist</h1>
    return (
        <>
            <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
                {article.title}
            </h1>
            
            {article.content.map((paragraph, index) => (
                <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
                {paragraph}
                </p>
            ))}

            <h1 className='sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900'>Other articles</h1>
            <div className='flex flex-wrap -m-4'>
                <Articles articles={otherArticle}/>
            </div>
        </>
    );
};

export default Article;