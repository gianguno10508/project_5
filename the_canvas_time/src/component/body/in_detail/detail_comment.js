import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
function DetailComment(props){
    const [colorWhite, setColorWhite] = useState(null);
    const [colorEEE, setColorEEE] = useState(null);
    useEffect(() => {
        if(props.darkmode == 'active dark mode'){
            setColorWhite('color-white');
            setColorEEE('color-eee');
        }else{
            setColorWhite(null);
            setColorEEE(null);
        }
    }, [props.darkmode]);
    return(
        <div className='detailComments' >
            <h3 id='comments-title' className={`${colorWhite}`}><span>3</span> Comments</h3>
            <ol className="commentlist">
                <li className="comment even thread-even depth-1" id="li-comment-1">
                <div id="comment-1" className="comment-wrap">
                    <div className="comment-meta">
                        <div className="comment-author vcard">
                            <span className="comment-avatar">
                            <img alt='' className='rounded' src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' class='avatar avatar-60 photo avatar-default' height='60' width='60' /></span>
                        </div>
                    </div>
                    <div className="comment-content">
                        <div className='comment-author'> <a className={`comment-author ${colorEEE}`} href="#2">John Doe</a>
                            <span>
                                <a href="#2" title="Permalink to this comment">April 24, 2012 at 10:46 am</a>
                            </span>
                        </div>
                        <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                        <a className='comment-reply-link' href='#2'>
                            <i class="fas fa-reply"></i>
                        </a>
                    </div>
                    <div className="clear"></div>
                </div>
                <ul className='children'>
                    <li className="comment byuser comment-author-_smcl_admin odd alt depth-2" id="li-comment-3">
                        <div id="comment-3" className="comment-wrap">
                            <div className="comment-meta">
                            <div className="comment-author vcard">
                                <span className="comment-avatar">
                                <img alt='' src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' className='rounded avatar avatar-30 photo' height='40' width='40' /></span>
                            </div>
                            </div>
                            <div className="comment-content">
                                <div className="comment-author">
                                <a href='#2' rel='external nofollow' className={`url ${colorEEE}`}>SemiColon</a><span><a href="#2" title="Permalink to this comment">April 25, 2012 at 1:03 am</a></span></div>
                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <a className='comment-reply-link' href='#2'>
                                    <i class="fas fa-reply"></i>
                                </a>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </li>
                </ul>
                </li>
                <li className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1" id="li-comment-2">
                    <div id="comment-2" className="comment-wrap">
                        <div className="comment-meta">
                            <div className="comment-author vcard">
                                <span className="comment-avatar">
                                <img alt='' src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G' className='rounded avatar avatar-60 photo' height='60' width='60' /></span>
                            </div>
                        </div>
                        <div className="comment-content">
                            <div className="comment-author">
                                <a href='https://themeforest.net/user/semicolonweb' rel='external nofollow' className={`url ${colorEEE}`}>SemiColon</a>
                                <span>
                                    <a href="#3" title="Permalink to this comment">April 25, 2012 at 1:03 am</a>
                                </span>
                            </div>
                            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                            <a className='comment-reply-link' href='#3'>
                                <i class="fas fa-reply"></i>
                            </a>
                        </div>
                        <div className="clear"></div>
                    </div>
                </li>
            </ol>
            <div className="clear"></div>          
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps) (DetailComment);