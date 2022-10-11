import React, { useEffect, useRef, useState } from 'react';
import '../../styles/lifestyle.css';
import img from '../../img/1.jpg';
import { connect } from 'react-redux';
import data from './datalifestyle';
import { Link } from 'react-router-dom';

const allCategories = ["all", ...new Set(data.map((p) => p.category))];
function Lifestyle(props) {
    // console.log(data);
    // +++DArKMODE++
    const [bgDarkLifeStyle, setbgDarkLifeStyle] = useState(null);
    const [bgLessDarkLifeStyle, setbgLessDarkLifeStyle] = useState(null);
    const [colorWhiteLifeStyle, setColorWhiteLifeStyle] = useState(null);
    const [colorLessWhiteLifeStyle, setColorLessWhiteLifeStyle] = useState(null);
    const [boderDarkLifeStyle, setboderDarkLifeStyle] = useState(null);
    const [cateDarkLifeStyle, setcateDarkLifeStyle] = useState(null);
    useEffect(() => {

        if (props.darkmode == 'active dark mode') {
            setbgDarkLifeStyle('bg-dark-mode-lifestyle');
            setColorWhiteLifeStyle('color-white-lifestyle');
            setbgLessDarkLifeStyle('bg-less-dark-mode-lifestyle');
            setColorLessWhiteLifeStyle('color-less-white-lifestyle');
            setboderDarkLifeStyle('boder-dark-lifestyle');
            setcateDarkLifeStyle('bg-dark-category-lifestyle');
        } else {
            setbgDarkLifeStyle(null);
            setColorWhiteLifeStyle(null);
            setbgLessDarkLifeStyle(null);
            setColorLessWhiteLifeStyle(null);
            setboderDarkLifeStyle(null);
            setcateDarkLifeStyle(null);
        }
    }, [props.darkmode]);

    const [showDropdown, setShowDropDown] = useState(null);
    const handleItemClickDropdown = (event) => {
        if (showDropdown == 'show') {
            setShowDropDown('disnone');
        } else {
            setShowDropDown('show');
            event.stopPropagation();
        }
    };
    const useOutsideClick = (callback) => {
        const refdr = useRef();

        useEffect(() => {
            const handleItemClickDropdown = (event) => {
                if (refdr.current && !refdr.current.contains(event.target)) {
                    callback();
                }
            };

            document.addEventListener('click', handleItemClickDropdown);

            return () => {
                document.removeEventListener('click', handleItemClickDropdown);
            };
        }, [refdr]);

        return refdr;
    };
    const handleClickOutsideDropdown = () => {
        setShowDropDown('disnone');
    };
    const refdropdown = useOutsideClick(handleClickOutsideDropdown);

    // +++Fiiter++
    const [menuItems, setMenuItems] = useState(data);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (e,category) => {
        e.preventDefault();
        if (category === "all") {
            return setMenuItems(data);
        }
        const newItems = data.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    // ++++Search+++
    const [searchItem, setsearchItem] = useState("");
    const onChange = (event) => {
        // setsearchItem(event.target.value);
        const newItems = [];
        if(event.target.value.length > 0){
            data.filter((item) => {
                const searchValue = event.target.value.toLowerCase();
                const searchData = item.name.toLowerCase();
                return (searchValue && searchData.startsWith(searchValue) && searchData !== searchValue);
                    
            }).map((item,index)=>{
                newItems[index] = item;
            });
            setMenuItems(newItems);
        }else{
            setMenuItems(data);
        }
    }
    const onSearch = (e,searchTerm) => {
        setsearchItem(searchTerm);
        console.log(searchTerm);
    }
    return (
        <div className={`${bgDarkLifeStyle} lifestyle-list `}>
            {/* +++FISTtitle++ */}
            <div className={`lifestyle-title ${bgLessDarkLifeStyle} ${boderDarkLifeStyle}`} >
                <div className='container'>
                    <h1 className={`lifestyle-title-name ${colorWhiteLifeStyle}`}>
                        Lifestyle
                    </h1>
                    <span className={`lifestyle-title-content ${colorLessWhiteLifeStyle}`}>
                        Phosfluorescently target clicks-and-mortar growth strategies for timely infrastructures. Monotonectally embrace high-quality applications.
                    </span>
                </div>
            </div>
            {/* ++++Fisttitle++ */}
            <div className='lifestyle-content'>
                <div className='lifestyle-content-list pt-0 pt-sm-4'>
                    <div className='container'>
                        {/* +++LIST+++ */}
                        <div className='row'>
                            <div className='col-3 sticky-top-cate cat-widgets h-100'>
                                <div className="cat-widgets h-100">
                                    <div className="lifestyle-widget-search">
                                        <form className={`input-group ${bgDarkLifeStyle}`}>
                                            <input className={`form-control ${bgDarkLifeStyle}`} type="search" placeholder="Search" aria-label="Search"
                                            onChange={onChange}
                                            />
                                        </form>
                                    </div>
                                    <div className="lifestyle-widget-nav  mt-md-5">
                                        <ul className="nav">
                                            {categories.map((cate, index) => (
                                                <li className="nav-item " key={index}>
                                                    <a className={`nav-link ${bgDarkLifeStyle}`} href="#" onClick={(e) => filterItems(e,cate)}>{cate}</a>
                                                </li>
                                            ))}

                                        </ul>
                                        {/* <div ref={refdropdown} className="show-item-search">
                                            {data
                                                .filter((item) => {
                                                    const searchTerm = searchItem.toLowerCase();

                                                    const productname = item.name.toLowerCase();

                                                    return (
                                                        searchTerm && productname.startsWith(searchTerm) && productname !== searchTerm
                                                    );
                                                }).slice(0, 6)
                                                .map((item) => (

                                                    <div className='item-show' key={item.id}>
                                                        <p onClick={() => onSearch(item.name)}>{item.name}</p>
                                                    </div>

                                                ))}


                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-9'>
                                <div className='d-flex'>
                                    <div className={`flex-grow-1 ${colorWhiteLifeStyle}`}>
                                        <h3>All Lifestyle Posts</h3>
                                    </div>
                                    <div className="dropdown dropdown-langs">
                                        <button className="btn dropdown-toggle px-1" onClick={(event) => handleItemClickDropdown(event)} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            Most Popular
                                        </button>
                                        <div ref={refdropdown} className={`dropdown-menu dropdown-menu-end  ${showDropdown} ${bgLessDarkLifeStyle}`} aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
                                            <a href="#" className={`dropdown-lifestyle-item ${colorWhiteLifeStyle}`}> Latest Posts</a>
                                            <a href="#" className={`dropdown-lifestyle-item ${colorWhiteLifeStyle}`}> Most Comments</a>

                                        </div>
                                    </div>
                                </div>
                                <div className='row col-mb-50 posts-md'>
                                    {menuItems.length > 0 ? 
                                    menuItems.map((item) => (
                                        <div className='col-md-4' key={item.id}>
                                            <div className='lifestyle-item'>
                                                <Link to='/detail'><img src={item.img} alt='' className='img-lifestyle'></img></Link>
                                                <div className='lifestyle-item-title '>
                                                    <Link to='/detail' className={`lifestyle-item-category ${cateDarkLifeStyle}`}>{item.category}</Link>
                                                    <h3><Link to='/detail' className={`color-underline stretched-link ${colorWhiteLifeStyle}`}>
                                                        {item.name}
                                                    </Link></h3>
                                                </div>
                                                <div className="lifestyle-item-meta">
                                                    <ul>
                                                        <li className={`${colorLessWhiteLifeStyle}`}>{item.date}</li>
                                                    </ul>
                                                </div>
                                                <div className="lifestyle-item-content mt-3">
                                                    <p className={`${colorLessWhiteLifeStyle}`}>{item.content}</p>
                                                    <Link to='/detail' className={`more-link ${colorWhiteLifeStyle}`}>{item.link}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )) : 
                                    <h3>Sorry, We don't have your search blog</h3>}
                                </div>
                            </div>
                        </div>
                        {/* +++LIST++ */}
                        {/* +++SUB++ */}
                        <div className="lifestyle-sub" >
                            <div class={`section-sub section-colored-sub rounded mb-0 px-4 ${bgLessDarkLifeStyle}`}>
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-lg-5">
                                        <h3 class={`mb-4 mb-lg-0 ${colorWhiteLifeStyle}`}>Sign up for Updates &amp; Newsletters.</h3>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="widget subscribe-widget" data-loader="button">
                                            <div class="widget-subscribe-form-result"></div>
                                            <form id="widget-subscribe-form" action="" method="post" class="mb-0 d-flex" noValidate="novalidate">
                                                <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" class="form-control" placeholder="Your Email Address" ></input>
                                                <button class="button button-large button-black button-dark fw-medium ls0 button-rounded m-0 ms-3" type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* +++SUB++ */}
                    </div>
                </div>


            </div>

        </div>
    );
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//     };
// };
const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    return {
        darkmode: state.darkmode
    };
}
export default connect(mapStateToProps)(Lifestyle);