import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import pD1 from '../../../acsset/image/postD1.jpg';
import pD2 from '../../../acsset/image/postD2.jpg';
import pD3 from '../../../acsset/image/postD3.jpg';
import pD4 from '../../../acsset/image/postD4.jpg';
function PostDetail(props){
    const [colorWhite, setColorWhite] = useState(null);
    useEffect(() => {
        if(props.darkmode == 'active dark mode'){
            setColorWhite('color-white');
        }else{
            setColorWhite(null);
        }
    }, [props.darkmode]);
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
        <>
            <h3 className={`mb-0 ${colorWhite}`}> Related Posts</h3>
            <div className='row posts-md'>
                {data.map((value,i)=>(
                    <div className='col-lg-3 col-sm-6' key={i}>
                        <div className='post_entry text-start'>
                            <div className='post_entry_img'>
                                <a href="#e"><img className='rounded' src={value.img} alt='anh'/></a>
                            </div>
                            <div className='post_entry_title'>
                                <div className='post_entry_cate'>
                                    <a href='#2' className={`${colorWhite}`}>{value.cateP}</a>
                                </div>
                                <h3>
                                    <a href="#s" className={`color-underline stretched-link ${colorWhite}`}>{value.name}</a>
                                </h3> 
                            </div>
                            <div className='post_entry_time'>
                                <p>{value.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}
const mapDispatchToProps =() =>{
    return{

    };
}
const mapStateToProps = (state) =>{
    return{
        darkmode: state.darkmode
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);