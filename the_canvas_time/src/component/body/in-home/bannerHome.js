import React from 'react';
import adbanner from "../../../acsset/image/ad.jpg"
function BannerHome(){

    return(
        <div className='bannerHome'>
            <div className='container'>
                <div className='row ad-bannerHome'>
                    <small className='mb-2 d-block'>Advertisement</small>
                    <div className="col-12">
                        <a href="#">
                            <img src={adbanner} alt="banner"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerHome;