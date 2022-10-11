import React from 'react';
import PostDetail from '../body/in_detail/detail_posts';
import pD1 from '../../acsset/image/postD1.jpg';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../../styles/home.css'
import HighLightHome from './in-home/highliight-home';
import NewLetter from './in-home/newLetter';
import LatesVideo from './in-home/lates_video';
import OutsandingHome from './in-home/outsanding_home';
import SpotLight from './in-home/spotlight';
import BasedOn from './in-home/basedOn/basedOn'
import BannerHome from './in-home/bannerHome';
function Home(){
    return(
        <div className='home'>
            <div className='container'>
                <div className='row'>
                    <OutsandingHome />
                    <HighLightHome/>
                </div>
                <NewLetter/>
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <LatesVideo />
                </AnimationOnScroll>
            </div>
            <SpotLight />
            <BasedOn />
            <BannerHome />.
        </div>
    );
}
  
export default Home;