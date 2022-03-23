import React from 'react';
import articleContent from './article-content';

const Article = ({match}) => {
    const name = match.params.name;
    const article = articleContent.fond((article) => article.name === name);
    return (
    <div className="mb-20">
            <h1 className="sm:text-4xl text-xl font-bold mt-6 mb-6 text-gray-900">This is an {article.title}</h1>
            {article.articleContent.map((paragraph, index) => (
                <p className='mx-auto eading-relaxed text-base mb-4'>{paragraph}</p>
            ))}
            </div>
  )
}

export default Article