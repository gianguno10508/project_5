import React from 'react';
import PostDetail from '../body/in_detail/detail_posts';
import pD1 from '../../acsset/image/postD1.jpg';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../styles/home.css'
import HighLightHome from './in-home/highliight-home';
import NewLetter from './in-home/newLetter';
import LatesVideo from './in-home/lates_video';
function Home(){
    return(
        <div className='home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 mb-5 mb-lg-0'>
                        <div className='article'>
                            <div className='post_entry text-start'>
                                <div className='post_entry_img'>
                                    <a href="#e"><img className='rounded' src={pD1} alt='anh'/></a>
                                </div>
                                <div className='post_entry_title'>
                                    <div className='post_entry_cate'>
                                        <a href='#2' >CORONAVIRUS UPDATE - WORLD</a>
                                    </div>
                                    <h3>
                                        <a href="#s" className='color-underline stretched-link '>Statement from Vice President Joe Biden on Record Number of Americans Filing for Unemployment</a>
                                    </h3> 
                                </div>
                                <div className='post_entry_time'>
                                    <p>Mar 11, 2016</p>
                                </div>
                                <div className='post-entry-content'>
                                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis. Lorem ipsum dolor sit amet. Rapidiously negotiate standardized web services and goal-oriented outsourcing. Uniquely repurpose compelling functionalities before parallel mindshare.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HighLightHome/>
                </div>
                <NewLetter/>
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <LatesVideo />
                </AnimationOnScroll>
            </div>
            
        </div>
    );
}
  
export default Home;