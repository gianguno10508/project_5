import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
function MediaDetailContent(props){
    const [colorWhite, setColorWhite] = useState(null);

    useEffect(() => {
        if(props.darkmode == 'active dark mode'){
            setColorWhite('color-white');
        }else{
            setColorWhite(null);
        }
    }, [props.darkmode]);
    return(
        <>
        <div className='detail-media-entry-title text-start'>
            <h4>All online Conferences to save your box, get Inspired and Stay Connected</h4>
        </div>
        <h5 className={`mb-2 text-start ${colorWhite}`}>Share this Post:</h5>
        <div className='divsi'>
            <a href='#2' className='detail-social-icon si-facebook si-rounded'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href='#2' className='detail-social-icon si-twitte si-rounded'>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-twitter"></i>
            </a>
            <a href='#2' className='detail-social-icon si-pinterest si-rounded'>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-pinterest"></i>
            </a>
            <a href='#2' className='detail-social-icon si-wifi si-rounded'>
                <i className="fas fa-wifi"></i>
                <i className="fas fa-wifi"></i>
            </a>
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
export default connect(mapStateToProps, mapDispatchToProps)(MediaDetailContent);