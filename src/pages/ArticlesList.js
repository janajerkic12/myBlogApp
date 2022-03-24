import React from 'react'
import Articles from '../components/Articles'
import articles from './article-content';
import articleContent from './article-content';


const ArticlesList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-xl font-bold mt-6 mb-6 text-gray-900">Artcles </h1>

      <Articles articles={articleContent}/>
    </>
  )
}

export default ArticlesList