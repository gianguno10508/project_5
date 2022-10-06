import { Link} from "react-router-dom";

function Header(){
    return(
        <header>
            <div className="container">
                <div className="header-row d-flex justify-content-lg-between">
                    <div className="socical-icon">
                        <Link to="/">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link to="/">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                    </div>
                    <div className="logo">
                        <Link className="standard-logo" to="/">The <span className="logo-name">Canvas</span> Times</Link>
                        <span className="date-today">15515</span>
                    </div>
                    <div className="header-misc d-flex col-auto col-lg-3 justify-content-lg-end ms-0 ms-sm-3 px-0">
                        <div className="dropdown dropdown-langs">
                            <button className="btn dropdown-toggle px-1 show" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <img src="" alt="French" />
                            </button>
                            {/* <div className="dropdown-menu dropdown-menu-end show" aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
                                <a href="#" className="dropdown-item"><img src="" alt="Lang"/> French</a>
                                <a href="#" className="dropdown-item"><img src="" alt="Lang"/> Arabic</a>
                                <a href="#" className="dropdown-item"><img src="" alt="Lang"/> Thailand</a>
                                <a href="#" className="dropdown-item disabled" tabindex="-1" aria-disabled="true"><img src="" alt="Lang"/> English</a>
                            </div> */}
                        </div>
                        <div className="top-search">
                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <div className="dark-mode">
                            <span className="dark-icon">
                                <i class="fa-solid fa-moon"></i>
                            </span>
                            <span className="white-icon">
                                <i class="fa-regular fa-sun"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-xs-12">test</div>
                    <div className="col-lg-6 col-md-7 col-xs-12 position-sticky h-100"><i className="fa-solid fa-phone"></i></div>
                </div>
            </div>
        </header>
    );
}
  
export default Header;