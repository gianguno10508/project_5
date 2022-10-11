import React from 'react';
import pD1 from '../../../acsset/image/postD1.jpg';
import pD2 from '../../../acsset/image/postD2.jpg';
import pD3 from '../../../acsset/image/postD3.jpg';
import pD4 from '../../../acsset/image/postD4.jpg';
function HighLightHome(){

    const data = [
        {
            img:pD1,
            cateP:'Travel',
            name:'The Best Destinations in Asia for Solo Travel',
            time:'Mar 11, 2016'
        },
        {
            img:pD2,
            cateP:'Fashion',
            name:'10 Trendy Fashion Instagram Profile You Need to Follow',
            time:'Mar 11, 2016'
        },
        {
            img:pD3,
            cateP:'Travel',
            name:'23 Top Travel Bloggers Who Inspire Us To Travel',
            time:'Mar 11, 2016'
        },
        {
            img:pD4,
            cateP:'FASHION  ',
            name:'The Best Destinations in Asia for Solo Travel',
            time:'Mar 11, 2016'
        },
    ]
    return(
        <div className='col-lg-5 highlightHome text-start' >
            <h4>Hightlights</h4>
            <div className='row posts-md col-mb-30'>
                {data.map((value,i)=>(
                        <div className='col-12' key={i}>
                            <div className='post_entry text-start row'>
                                <div className='col-md-4'>
                                    <div className='post_entry_img '>
                                        <a href="#e"><img className='rounded' src={value.img} alt='anh'/></a>
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <div className='hightlight_textcontent '>
                                        <div className='post_entry_title'>
                                            <div className='post_entry_cate'>
                                                <a href='#2' >{value.cateP}</a>
                                            </div>
                                            <h3>
                                                <a href="#s" className={`color-underline stretched-link `}>{value.name}</a>
                                            </h3> 
                                        </div>
                                        <div className='post_entry_time'>
                                            <p>{value.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default HighLightHome;