import { Link} from "react-router-dom";
import '../styles/header.css';
import EngFlag from '../img/eng_flag.png';
import AraFlag from '../img/ara_flag.png';
import FreFlag from '../img/fre_flag.png';
import ThaFlag from '../img/tha_flag.png';
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { actSelectDarkMode } from "../actions";
function Header(props){
    const current = new Date();
    const date = `${current.getDate()}`;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const m = new Date();
    let month = monthNames[m.getMonth()];


    const [bgDark, setBgDark] = useState(null);
    const [darkMode, setDarkMode] = useState('disblock');
    const [unDarkMode, setUnDarkMode] = useState('disnone');
    const [colorWhite, setColorWhite] = useState(null);
    const handleItemClick = (event) => {
        if(darkMode == 'disblock' && unDarkMode=='disnone'){
            setDarkMode('disnone');
            setUnDarkMode('disblock');
            setBgDark('bg-dark-mode');
            setColorWhite('color-white');
            props.setDarkMode('active dark mode');
        }else{
            setDarkMode('disblock');
            setUnDarkMode('disnone');
            setBgDark(null);
            setColorWhite(null);
            props.setDarkMode('inactive dark mode');
        }
    };

    const [showDropdown, setShowDropDown] = useState(null);
    const handleItemClickDropdown = (event) => {
        if(showDropdown == 'show'){
            setShowDropDown('disnone');
        }else{
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


    const useOutsideClickSearch = (callback) => {
        const ref = useRef();
      
        useEffect(() => {
          const handleItemClickSearch = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
              callback();
            }
          };
      
          document.addEventListener('click', handleItemClickSearch);
      
          return () => {
            document.removeEventListener('click', handleItemClickSearch);
          };
        }, [ref]);
      
        return ref;
    };
    const handleClickOutside = () => {
        setShowSearch('disnone');
    };
    const [showSearch, setShowSearch] = useState('disnone');
    const handleItemClickSearch = (event) => {
        if(showSearch == 'show'){
            setShowSearch('disnone');
        }else{
            setShowSearch('show');
            event.stopPropagation();
        }
    };
    const ref = useOutsideClickSearch(handleClickOutside);
    return(
        <header className={`header sticky-top ${bgDark}`}>
            <div className="container">
                <div className="header-row d-flex justify-content-lg-between">
                    <div className="socical-icon col-lg-3 d-md-flex px-0 align-items-center">
                        <Link className="social-icon si-rounded si-dark si-mini si-facebook" to="/">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon si-rounded si-dark si-mini si-twitter" to="/">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link className="social-icon si-rounded si-dark si-mini si-insta" to="/">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                    </div>
                    <div className="logo col-lg-4 flex-column d-flex">
                        <Link className={`standard-logo ${colorWhite}`} to="/">The <span className="logo-name">Canvas</span> Times</Link>
                        <span className="date-today">
                            <span className="today-text">
                                {`${day}, ${month} ${date}`}
                            </span>
                        </span>
                    </div>
                    <div className="header-misc align-items-center d-flex col-auto col-lg-3 justify-content-lg-end ms-0 ms-sm-3 px-0">
                        <div className="dropdown dropdown-langs">
                            <button className="btn dropdown-toggle px-1" onClick={(event) => handleItemClickDropdown(event)} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <img src={EngFlag} alt="English" />
                            </button>
                            <div ref={refdropdown} className={`dropdown-menu dropdown-menu-end ${showDropdown}`} aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
                                <a href="#" className="dropdown-item"><img src={FreFlag} alt="Lang"/> French</a>
                                <a href="#" className="dropdown-item"><img src={AraFlag} alt="Lang"/> Arabic</a>
                                <a href="#" className="dropdown-item"><img src={ThaFlag} alt="Lang"/> Thailand</a>
                                <a href="#" className="dropdown-item"><img src={EngFlag} alt="Lang"/> English</a>
                            </div>
                        </div>
                        <div className={`top-search ${colorWhite}`} >
                            <i class="fa-solid fa-magnifying-glass"  onClick={handleItemClickSearch}></i>
                            <div ref={ref} className={`search-box ${showSearch}`}>
                                <input type='text' placeholder="Search here..."/>
                            </div>
                        </div>
                        <div className="dark-mode" onClick={(event) => handleItemClick(event)}>
                            <span className={`dark-icon ${darkMode} ${colorWhite}`}>
                                <i class="fa-solid fa-moon"></i>
                            </span>
                            <span className={`white-icon ${unDarkMode} ${colorWhite}`}>
                                <i class="fa-regular fa-sun"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="justify-content-lg-center collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className={`nav-link ${colorWhite}`} href="#"><div>Home</div></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${colorWhite}`} href="#"><div>World</div></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${colorWhite}`} href="#"><div>Tech</div></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${colorWhite}`} href="#"><div>Lifestyle</div></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${colorWhite}`} href="#"><div>Business</div></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${colorWhite}`} href="#"><div>Finance</div></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${colorWhite}`} href="#"><div>Food</div></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${colorWhite}`} href="#"><div>Sports</div></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        setDarkMode: (data) => {
            dispatch(actSelectDarkMode(data));
        }
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);  