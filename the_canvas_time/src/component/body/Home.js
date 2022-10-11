import React from 'react';

import PostDetail from '../body/in_detail/detail_posts';


import '../../styles/home.css'
import HighLightHome from './in-home/highliight-home';
import NewLetter from './in-home/newLetter';
import LatesVideo from './in-home/lates_video';
import OutsandingHome from './in-home/outsanding_home';
import SpotLight from './in-home/spotlight';
import BasedOn from './in-home/basedOn/basedOn'
function Home(){
    return(
        <div className='home'>
            <div className='container'>
                <div className='row'>
                    <OutsandingHome />
                    <HighLightHome/>
                </div>
                <NewLetter/>
                <LatesVideo />
            </div>
            <SpotLight/>
            <BasedOn />
        </div>
    );
}
  
export default Home;