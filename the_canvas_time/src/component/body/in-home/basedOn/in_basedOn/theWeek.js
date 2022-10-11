import React from 'react';

function TheWeek(){
    const data=[
        {
            numberL:'01.',
            titleL:'The Best Destinations in Asia for Solo Travel',
            day:'Mar 11, 2016'
        },
        {
            numberL:'02.',
            titleL:'The Best Destinations in Asia for Solo Travel',
            day:'Mar 11, 2016'
        },
        {
            numberL:'03.',
            titleL:'The Best Destinations in Asia for Solo Travel',
            day:'Mar 11, 2016'
        },
        {
            numberL:'04.',
            titleL:'The Best Destinations in Asia for Solo Travel',
            day:'Mar 11, 2016'
        },
        {
            numberL:'05.',
            titleL:'The Best Destinations in Asia for Solo Travel',
            day:'Mar 11, 2016'
        },
    ]
    return(
        <div className='theWeek text-start col-lg-4 mt-5 mt-lg-0 position-sticky h-100'>
            <h3 id='rhh4'>This Week</h3>
            <ul className='week-posts posts-sm row col-mb-30'>
                {data.map((v,i)=>(
                    <li className='col-12 weeks-item' key={i}>
                        <div className='row'>
                            <div className='col-1 numberL'>
                                <span>{v.numberL}</span>
                            </div>
                            <div className='col-11 titleL'>
                                <div className='post-entry-title'>
                                    <h4>
                                        <a href="#" className='color-underline'>{v.titleL}</a>
                                    </h4>
                                </div>
                                <div className='post_entry_time'>
                                    <p>{v.day}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='ad row'>
                <h3 id='rhh3'>Ad</h3>
                <div className='col-12'>
                    <iframe src='https://www.facebook.com/semicolonweb/photos/a.1218538191515522/2855299231172735/?type=3'></iframe>
                </div>
            </div>
        </div>
    )
}
export default TheWeek;