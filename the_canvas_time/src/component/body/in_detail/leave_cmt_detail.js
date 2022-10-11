import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
function LeaveCmtDetail(props){
    const [bgLessDark, setBgLessDark] = useState(null);
    const [colorWhite, setColorWhite] = useState(null);
    useEffect(() => {
        if(props.darkmode == 'active dark mode'){
            setColorWhite('color-white');
            setBgLessDark('bg-less-dark-mode');
        }else{
            setColorWhite(null);
            setBgLessDark(null);
        }
    }, [props.darkmode]);

    return(
        <div className='leaveCmtDetail text-start'>
            <h3 className={`${colorWhite}`}>Leave a <span>Comment</span></h3>
            <form className='row m-0' id='commentform'>
                <div className='col-4 form-group'>
                    <label className={`${colorWhite}`}>Name</label>
                    <input type="text" name="author" className={`form-control ${bgLessDark}`}></input>
                </div>
                <div className='col-4 form-group'>
                    <label className={`${colorWhite}`}>Email</label>
                    <input type="email" name="email" className={`form-control ${bgLessDark}`}></input>
                </div>
                <div className='col-4 form-group'>
                    <label className={`${colorWhite}`}>Website</label>
                    <input type="text" name="url" className={`form-control ${bgLessDark}`}></input>
                </div>
                <div className='col-12 form-group'>
                    <label className={`${colorWhite}`}>Comment</label>
                    <textarea cols="5" rows="7" name="comment" className={`form-control ${bgLessDark}`}></textarea>
                </div>
                <div className='col-12 mt-4 mb-0'>
                    <button type='submit' className={`${colorWhite}`}>Submit Comment</button>
                </div>
            </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(LeaveCmtDetail);