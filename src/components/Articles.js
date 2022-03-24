import React from 'react'
import { Link } from 'react-router-dom';

export const Articles = ({articles}) => {
  return (
    <>
        <div className="container py-4 mx-auto">
        <div className='flex flex-wrap -m-4'>
          {articles.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Link to={`/article/${article.name}`}>
                  <img className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={article.thumbnail}></img>
                </Link>
                <div className='p-6'>
                  <Link to={`/article/${article.name}`}>
                    <h3 className='title-font text-jg font-medium text-gary-9 mb-3'>{article.title}</h3>
                  </Link>
                  <p className='leading-relaxed mb-3'>
                    {article.content[0].substring(0,115)}...
                  </p>
                  <div className='flex item-center flex-wrap'>
                    <Link className='flex-bg-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' to={`/article/${article.name}`}>Learn more...</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Articles;