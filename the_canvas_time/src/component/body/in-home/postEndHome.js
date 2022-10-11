import React from 'react';


function PostEndHome({ bgDarkHome }) {
    const data = [
        {
            id: 1,
            name: 'World',
            content: [
                {
                    id: 1,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                },
                {
                    id: 2,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                }, {
                    id: 3,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                },
            ],
        },
        {
            id: 2,
            name: 'Food',
            content: [
                {
                    id: 1,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                },
                {
                    id: 2,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                }, {
                    id: 3,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                },
            ],
        },
        {
            id: 3,
            name: 'Fashion',
            content: [
                {
                    id: 1,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                },
                {
                    id: 2,
                    title: 'How I Improved My Travel In One Easy Lesson',
                    date: 'Mar 11, 2020',
                }, {
                    id: 3,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                },
            ],
        },
        {
            id: 4,
            name: 'Travel',
            content: [
                {
                    id: 1,
                    title: 'A Visual Trek Through the Sweltering Jungle: In Search of Colombia’s ‘Lost City’',
                    date: 'Mar 11, 2020',
                },
                {
                    id: 2,
                    title: 'Coronavirus Live Updates: Singapore Sees Record Number of New Cases',
                    date: 'Mar 11, 2020',
                }, {
                    id: 3,
                    title: 'Believe In Your Travel Skills But Never Stop Improving',
                    date: 'Mar 11, 2020',
                },
            ],
        },
    ];
    // console.log(data);
    return (
        <div className='container'>
            <div className={`${bgDarkHome} row home-posts col-mb-50 mb-0 `}>
                {data.map((item, index) => (
                    <div className='col-md-6 col-lg-3' key={index}>
                        <h3>{item.name}</h3>
                        <div className='row mb-0'>
                            {item.content.map((ite, ind) => (
                                <div className='item-post-home col-12' key={ind}>
                                    <div class="grid-inner">
                                        <div class="item-post-home-title">
                                            <h3><a href="#" class="color-underline">{ite.title}</a></h3>
                                        </div>
                                        <div class="item-post-home-date">
                                            <ul>
                                                <li><a href="#">{ite.date}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <a href="#" class="more-link-post-home">View more<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                ))}

            </div>
        </div>

    );
}

export default PostEndHome;