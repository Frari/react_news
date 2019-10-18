import React from 'react';
import News from './News.js'

const ListNews = ({news}) => {
    return ( 
        <div className='row'>
            {news.map(singleNews => (
                <News 
                    key = {singleNews.url}
                    news = {singleNews}
                />
            ))}
        </div>
     );
}
 
export default ListNews;