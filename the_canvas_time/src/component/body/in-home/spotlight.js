import React from 'react';
import OutsandingHome from './outsanding_home';
import HighLightHome from './highliight-home';
function SpotLight(){
    return(
        <div className='spotlight text-start'>
            <div className='container'>
            <h4 id='sl'>Spotlights</h4>
                <div className='row'>
                    <OutsandingHome />
                    <HighLightHome/>
                </div>
            </div>
        </div>
    )
}
export default SpotLight;