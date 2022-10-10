import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import '../../styles/detail.css';
import DetailTextContent from './in_detail/detail_text_content';
import LeaveCmtDetail from './in_detail/leave_cmt_detail'
import herofull from '../../acsset/image/hero-full.jpg'
import MediaDetailContent from './in_detail/detail_media_content';
import PostDetail from './in_detail/detail_posts'

function Detail(props) {
    console.log(props.darkmode);

    const [bgDark, setBgDark] = useState(null);
    const [bgLessDark, setBgLessDark] = useState(null);
    const [colorWhite, setColorWhite] = useState(null);
    const [colorLessWhite, setColorLessWhite] = useState(null);
    useEffect(() => {
        if(props.darkmode == 'active dark mode'){
            setBgDark('bg-dark-mode');
            setColorWhite('color-white');
            setBgLessDark('bg-less-dark-mode');
            setColorLessWhite('color-less-white');
        }else{
            setBgDark(null);
            setColorWhite(null);
            setBgLessDark(null);
            setColorLessWhite(null);
        }
    }, [props.darkmode]);

    return (
        <div className={`detail ${bgDark} `}>
            <div className='in-detail content-wrap pt-5 pb-5'>
                <div className='container'>
                    <div className='singer-port-detail mb-0'>
                        <div className={`detail-entry mb-5 ${colorWhite}`}>
                            <div className='row detail-justify-content-center'>
                                <div className='col-lg-6'>
                                    <div className={`detail-entry-title ${colorWhite}`}>
                                        <div className='detail-entry-categories'>
                                            <a href='#2'>Coronavirus Update - World</a>
                                        </div>
                                        <h2>All online Conferences to save your box, get Inspired and Stay Connected</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex detail-justify-content-center mt-2'>
                                <div className='detail-entry-meta'>
                                    <ul>
                                        <li>10th July 2014</li>
                                        <li>By  <a href='#2'>SemiColonWeb</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='detail-entry-image mt-5'>
                                <a href='#2'>
                                    <img className='rounded' src={herofull} alt="herofull"/>
                                </a>
                            </div>
                            <div className='detail-entry-content'>
                                <div className='row'>
                                    <div className='col-lg-2 detail-media-content'>
                                        <MediaDetailContent/>
                                    </div>
                                    <div className='col-lg-1'></div>
                                    <div className='col-lg-6'>
                                        <DetailTextContent />
                                        <LeaveCmtDetail />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PostDetail/>
                    </div>
                </div>
            </div>
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);