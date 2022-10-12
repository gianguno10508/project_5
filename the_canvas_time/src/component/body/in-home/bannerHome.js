import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import adbanner from "../../../acsset/image/ad.jpg"
function BannerHome({ bgDarkHome }) {

    return (
        <div className={`${bgDarkHome} bannerHome`}>
            <div className='container'>
                <AnimationOnScroll initiallyVisible={true} delay={500} animateIn="animate__wobble">
                    <div className='row ad-bannerHome'>
                        <small className='mb-2 d-block'>Advertisement</small>
                        <div className="col-12">
                            <a href="#">
                                <img src={adbanner} alt="banner" />
                            </a>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}
export default BannerHome;