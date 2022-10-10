import React from "react";
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import imgDC1 from "../../../acsset/image/imgDC1.jpg";
import imgDC2 from "../../../acsset/image/imgDC2.jpg";
import DetailComment from "../in_detail/detail_comment"
function DetailTextContent(props){
    const [colorWhite, setColorWhite] = useState(null);
    useEffect(() => {
        if(props.darkmode == 'active dark mode'){
            setColorWhite('color-white');
        }else{
            setColorWhite(null);
        }
    }, [props.darkmode]);
    return(
        <div className={`detail-text-content text-start ${colorWhite}`} >
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, 
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet 
            fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p><br></br>
            <h3 className={`${colorWhite}`}>1. Content</h3>
            In this cheat sheet, we will go over the following:
            <ol className="list-numbers">
                <li>Anatomy</li>
                <li>Dropdown types and variations</li>
                <li>Dropdown styles</li>
                <li>Dropdown states</li>
                <li>What the placeholder should say</li>
                <li>When not to use a dropdown (and when to)</li>
                <li>Native dropdowns</li>
                <li>Accessibility checklist</li>
                <li>Closing thoughts</li>
            </ol>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. <a href="#3">Curabitur blandit tempus porttitor</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
            <blockquote>
                <p>Vestibulum id ligula porta felis euismod semper. 
                Sed posuere consectetur est at lobortis. Aenean eu leo
                 quam. Pellentesque ornare sem lacinia quam venenatis 
                 vestibulum. Duis mollis, est non commodo luctus, 
                 nisi erat porttitor ligula, eget lacinia odio sem nec 
                 elit. Donec ullamcorper nulla non metus auctor fringilla.
                  Vestibulum id ligula porta felis euismod semper.</p>
            </blockquote>
            <br></br>
            <h3 className={`${colorWhite}`}>2. Anatomy</h3>
            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.</p>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. <a href="#">Nullam quis risus eget urna</a> mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p><br></br>
            <h3 className={`${colorWhite}`}>3. Standard Solution</h3>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
            <div className="row mb-4" data-lightbox="gallery">
                <div className="col-md-6">
                    <a href="demos/blog/images/single/1-full.jpg" data-lightbox="gallery-item">
                        <img className="rounded" src={imgDC1} alt="Alt Images"/>
                    </a>
                </div>
                <div className="col-md-6">
                    <a href="demos/blog/images/single/2-full.jpg" data-lightbox="gallery-item">
                        <img className="rounded" src={imgDC2} alt="Alt Images"/>
                    </a>
                </div>
            </div>
            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.</p>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. <a href="#">Nullam quis risus eget urna</a> mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
            <div className="line"></div>
            <div className="tagcloud">
                <h4>Related Tags</h4>
                <a href="#1">general</a>
                <a href="#1">information</a>
                <a href="#1">media</a>
                <a href="#1">press</a>
                <a href="#1">gallery</a>
                <a href="#1">illustration</a>
            </div>
            <div className="clear"></div>   
            <DetailComment />      
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
export default connect(mapStateToProps, mapDispatchToProps) (DetailTextContent);