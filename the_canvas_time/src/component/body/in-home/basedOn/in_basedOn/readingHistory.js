import React from 'react';
import pD1 from '../../../../../acsset/image/postD1.jpg';
import pD2 from '../../../../../acsset/image/postD2.jpg';
import pD3 from '../../../../../acsset/image/postD3.jpg';
import pD4 from '../../../../../acsset/image/postD4.jpg';
function ReadingHistory({ bgDarkHome }) {
    const data = [
        {
            img: pD1,
            cateP: 'Travel',
            name: 'The Best Destinations in Asia for Solo Travel',
            time: 'Mar 11, 2016',
            contentRH: 'Welcome to Five Weeknight Dishes. This newsletter is dedicated to recipes that are easy, quick and satisfying, words that all have a different meaning today than they did when we first started. I spent a few hours this week cleaning out my freezer and — compared with the other things on my to-do list.'
        },
        {
            img: pD2,
            cateP: 'Fashion',
            name: '10 Trendy Fashion Instagram Profile You Need to Follow',
            time: 'Mar 11, 2016',
            contentRH: 'Welcome to Five Weeknight Dishes. This newsletter is dedicated to recipes that are easy, quick and satisfying, words that all have a different meaning today than they did when we first started. I spent a few hours this week cleaning out my freezer and — compared with the other things on my to-do list.'
        },
        {
            img: pD3,
            cateP: 'Travel',
            name: '23 Top Travel Bloggers Who Inspire Us To Travel',
            time: 'Mar 11, 2016',
            contentRH: 'Welcome to Five Weeknight Dishes. This newsletter is dedicated to recipes that are easy, quick and satisfying, words that all have a different meaning today than they did when we first started. I spent a few hours this week cleaning out my freezer and — compared with the other things on my to-do list.'
        },
        {
            img: pD4,
            cateP: 'FASHION  ',
            name: 'The Best Destinations in Asia for Solo Travel',
            time: 'Mar 11, 2016',
            contentRH: 'Welcome to Five Weeknight Dishes. This newsletter is dedicated to recipes that are easy, quick and satisfying, words that all have a different meaning today than they did when we first started. I spent a few hours this week cleaning out my freezer and — compared with the other things on my to-do list.'
        },
    ]
    return (
        <div className={`${bgDarkHome} readingHistory col-lg-8  text-start`}>
            <h3 id='rhh3'>Based On Your Reading History</h3>
            <div className='row col-mb-50'>
                {data.map((v, i) => (
                    <div className='col-12 readingH_item' key={i}>
                        <div className='row'>
                            <div className='col-md-6 mb-0 post_entry_img '>
                                <a href='#'>
                                    <img src={v.img} alt="d" />
                                </a>
                            </div>
                            <div className='col-md-6 post_entry_title'>
                                <div className='post_entry_cate'>
                                    <a href='#'>{v.cateP}</a>
                                </div>
                                <h3>
                                    <a href="#" className='color-underline stretched-link'>{v.name}</a>
                                </h3>
                                <div className='post_entry_time'>
                                    <p>{v.time}</p>
                                </div>
                                <div className='post_readingH'>
                                    <p>{v.contentRH}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ReadingHistory;