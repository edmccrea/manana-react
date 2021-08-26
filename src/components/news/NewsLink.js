import React from 'react';
import './NewsLink.scss';

const NewsLink = ({ article }) => {
  const atricleSubStr = article.content.substring(0, 400) + '...';
  return (
    <div className='news-link-container'>
      <img src={article.image} alt='' className='news-link-img' />
      <div className='news-link-content'>
        <h2 className='news-link-title'>{article.title}</h2>
        <p className='news-link-date'>{article.date}</p>
        <p className='news-link-snippet'>{atricleSubStr}</p>
        <a href='/news' className='article-link'>
          <p>Read more...</p>
        </a>
      </div>
    </div>
  );
};

export default NewsLink;
