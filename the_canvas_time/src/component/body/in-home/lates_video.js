import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import ReactPlayer from 'react-player';
import pD1 from '../../../acsset/image/postD1.jpg';
import pD2 from '../../../acsset/image/postD2.jpg';
import pD3 from '../../../acsset/image/postD3.jpg';
import pD4 from '../../../acsset/image/postD4.jpg';
function LatesVideo(props){
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
            img:'https://www.youtube.com/watch?v=P3Huse9K6Xs',
            cateP:'Travel',
            name:'The Best Destinations in Asia for Solo Travel',
            time:'Mar 11, 2016'
        },
        {
            img:'https://www.youtube.com/watch?v=P3Huse9K6Xs',
            cateP:'Fashion',
            name:'10 Trendy Fashion Instagram Profile You Need to Follow',
            time:'Mar 11, 2016'
        },
        {
            img:'https://www.youtube.com/watch?v=P3Huse9K6Xs',
            cateP:'Travel',
            name:'23 Top Travel Bloggers Who Inspire Us To Travel',
            time:'Mar 11, 2016'
        },
    ]
    return(
        <>  
            <div className='lastes_title'>
                <h3 className={`mb-0 ${colorWhite}`}>Latest Videos</h3>
                <button className='btn btn-sm btn-outline-secondary'>More Content <i class="far fa-arrow-right"></i></button>
            </div>
            <div className='lastes_item row posts-md'>
                {data.map((value,i)=>(
                    <div className=' col-lg-4 col-sm-6' key={i}>
                        <div className=' post_entry text-start'>
                            <div className='post_entry_img'>
                                <ReactPlayer
                                    url={value.img}
                                    width="auto"
                                    height="230px"
                                    playing={true}
                                    controls={true}
                                    light={true}
                                    pip={true} 
                                />
                                {/* <div className='play-icon'>
                                    <i class="far fa-play-circle"></i>
                                    Watch
                                </div> */}
                            </div>
                            <div className=' post_entry_title'>
                                <div className='post_entry_cate'>
                                    <a href='#2' className={`${colorWhite}`}>{value.cateP}</a>
                                </div>
                                <h3>
                                    <a href="#s" className={`color-underline ${colorWhite}`}>{value.name}</a>
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
export default connect(mapStateToProps, mapDispatchToProps)(LatesVideo);