import React from 'react';
import './News.scss';
import NewsLink from './NewsLink';

const News = () => {
  let newsArticles = [
    {
      image:
        'https://pbs.twimg.com/profile_images/1321017388368683009/6-75Sp7z_400x400.jpg',
      title: 'Mañana website is live!',
      date: 'Thursday, August 26th, 2021',
      content:
        "The website is now up and running. Exciting times! Here I'm testing out the length of this article to preview in the news link component. I want  to substring it down to a length where it looks good and firts in with the rest of the page. Everything needs to flow nicely. In order to really test it I need to keep typing this gibberish so it is long enough. How do I add a new link into this format? I'm not sure I'm goign to have to google it. If it looks good, then my googling skills are up to scratch. If not, then what am I doing, stop wasting time and figure it out. Also, ther emust be a extension for spell checker in VSCode. I am typing too quick and not a good typer so I miss many mistakes.",
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1321017388368683009/6-75Sp7z_400x400.jpg',
      title: 'Mañana website is live!',
      date: 'Thursday, August 26th, 2021',
      content:
        "The website is now up and running. Exciting times! Here I'm testing out the length of this article to preview in the news link component. I want  to substring it down to a length where it looks good and firts in with the rest of the page. Everything needs to flow nicely. In order to really test it I need to keep typing this gibberish so it is long enough. How do I add a new link into this format? I'm not sure I'm goign to have to google it. If it looks good, then my googling skills are up to scratch. If not, then what am I doing, stop wasting time and figure it out. Also, ther emust be a extension for spell checker in VSCode. I am typing too quick and not a good typer so I miss many mistakes.",
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1321017388368683009/6-75Sp7z_400x400.jpg',
      title: 'Mañana website is live!',
      date: 'Thursday, August 26th, 2021',
      content:
        "The website is now up and running. Exciting times! Here I'm testing out the length of this article to preview in the news link component. I want  to substring it down to a length where it looks good and firts in with the rest of the page. Everything needs to flow nicely. In order to really test it I need to keep typing this gibberish so it is long enough. How do I add a new link into this format? I'm not sure I'm goign to have to google it. If it looks good, then my googling skills are up to scratch. If not, then what am I doing, stop wasting time and figure it out. Also, ther emust be a extension for spell checker in VSCode. I am typing too quick and not a good typer so I miss many mistakes.",
    },
    {
      image:
        'https://pbs.twimg.com/profile_images/1321017388368683009/6-75Sp7z_400x400.jpg',
      title: 'Mañana website is live!',
      date: 'Thursday, August 26th, 2021',
      content:
        "The website is now up and running. Exciting times! Here I'm testing out the length of this article to preview in the news link component. I want  to substring it down to a length where it looks good and firts in with the rest of the page. Everything needs to flow nicely. In order to really test it I need to keep typing this gibberish so it is long enough. How do I add a new link into this format? I'm not sure I'm goign to have to google it. If it looks good, then my googling skills are up to scratch. If not, then what am I doing, stop wasting time and figure it out. Also, ther emust be a extension for spell checker in VSCode. I am typing too quick and not a good typer so I miss many mistakes.",
    },
  ];
  return (
    <div className='container'>
      <h1 className='page-title'>News</h1>
      <div className='link-container'>
        {newsArticles.map((article) => (
          <NewsLink article={article} key={article.title} />
        ))}
      </div>
    </div>
  );
};

export default News;
