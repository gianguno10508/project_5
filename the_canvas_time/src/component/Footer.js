import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../styles/footer.css';
import $ from 'jquery';
function Footer(props){
    const [bgDark, setBgDark] = useState(null);
    const [bgLessDark, setBgLessDark] = useState(null);
    const [colorWhite, setColorWhite] = useState(null);
    const [colorLessWhite, setColorLessWhite] = useState(null);
    useEffect(() => {
        if(props.darkmode == 'active dark mode'){
            setBgDark('bg-dark-mode');
            setColorWhite('color-white');
            setBgLessDark('bg-less-dark-mode');
            setColorLessWhite('color-less-white');
        }else{
            setBgDark(null);
            setColorWhite(null);
            setBgLessDark(null);
            setColorLessWhite(null);
        }
    }, [props.darkmode]);
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
          if (scrolled > 300){
            setVisible(true)
          } 
          else if (scrolled <= 300){
            setVisible(false)
          }
        };
        
        const scrollToTop = () =>{
          window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
          });
        };
        window.addEventListener('scroll', toggleVisible);
    return(
        <footer className={`footer ${bgDark}`}>
            <div className="container">
                <div className="footer-widgets-wrap row col-mb-50">

                <div className="col-lg-2 col-sm-6">
                    <div className="widget widget_links">
                        <h4 className={`mb-3 mb-sm-4 nott ls0 ${colorWhite}`}>Management</h4>
                        <ul>
                            <li><a className={`${colorLessWhite}`} href="https://codex.wordpress.org/">About Us</a></li>
                            <li><a className={`${colorLessWhite}`} href="https://wordpress.org/support/forum/requests-and-feedback">Careers</a></li>
                            <li><a className={`${colorLessWhite}`} href="https://wordpress.org/extend/plugins/">Customers</a></li>
                            <li><a className={`${colorLessWhite}`} href="https://wordpress.org/support/">Forums</a></li>
                            <li><a className={`${colorLessWhite}`} href="https://wordpress.org/extend/themes/">Partners</a></li>
                            <li><a className={`${colorLessWhite}`} href="https://wordpress.org/news/">Themes</a></li>
                            <li><a className={`${colorLessWhite}`} href="https://planet.wordpress.org/">Pricing</a></li>
                            <li><a className={`${colorLessWhite}`} href="https://planet.wordpress.org/">Reviews</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                    <div className="widget widget_links">
                    <h4 className={`mb-3 mb-sm-4 nott ls0 ${colorWhite}`}>Our Products</h4>
                    <ul>
                        <li><a className={`${colorLessWhite}`} href="https://codex.wordpress.org/">Real Estate</a></li>
                        <li><a className={`${colorLessWhite}`} href="https://wordpress.org/support/forum/requests-and-feedback">Movers</a></li>
                        <li><a className={`${colorLessWhite}`} href="https://wordpress.org/extend/plugins/">Stores</a></li>
                        <li><a className={`${colorLessWhite}`} href="https://wordpress.org/support/">Landing</a></li>
                        <li><a className={`${colorLessWhite}`} href="https://wordpress.org/extend/themes/">Seo</a></li>
                        <li><a className={`${colorLessWhite}`} href="https://wordpress.org/news/">CoWorking</a></li>
                    </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-6">
                    <div className="widget widget_links">
                    <h4 className={`mb-3 mb-sm-4 nott ls0 ${colorWhite}`}>Support</h4>
                    <ul>
                        <li><a className={`${colorLessWhite}`} href="https://codex.wordpress.org/">Privacy</a></li>
                        <li><a className={`${colorLessWhite}`} href="https://wordpress.org/support/forum/requests-and-feedback">Help Center</a></li>
                        <li><a className={`${colorLessWhite}`} href="https://wordpress.org/extend/plugins/">Chat</a></li>
                        <li><a className={`${colorLessWhite}`} href="https://wordpress.org/support/">Email Us</a></li>
                    </ul>
                    <div className="mt-3">
                        <a href="https://facebook.com/" class="social-icon si-small si-dark si-facebook" title="Facebook" target="_blank">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/" class="social-icon si-small si-dark si-instagram" title="instagram" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" class="social-icon si-small si-dark si-twitter" title="twitter" target="_blank">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon si-small si-dark si-wikipedia" title="Apple Pay">
                        <i class="fa-brands fa-apple-pay"></i>
                    </a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <div className="widget widget_links">
                    <h4 className={`mb-3 mb-sm-4 nott ls0 ${colorWhite}`}>Tag Cloud</h4>
                    <div className="tagcloud">
                        <a href="#">general</a>
                        <a href="#">videos</a>
                        <a href="#">music</a>
                        <a href="#">media</a>
                        <a href="#">photography</a>
                        <a href="#">parallax</a>
                        <a href="#">ecommerce</a>
                        <a href="#">terms</a>
                        <a href="#">coupons</a>
                        <a href="#">modern</a>
                        <a href="#">magazine</a>
                        <a href="#">bootstrap</a>
                        <a href="#">news</a>
                        <a href="#">blog</a>
                        <a href="#">wordpress</a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <div className="widget widget_links">
                    <h4 className={`mb-3 mb-sm-4 nott ls0 ${colorWhite}`}>Download in Mobile</h4>
                    <p className={`${colorLessWhite}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae esse iure est, quam libero!</p>
                    <a href="#" className="button button-dark text-light w-100 text-center bg-dark nott ls0 button-rounded button-xlarge noleftmargin"><i className="fa-brands fa-apple"></i>App Store</a>
                    <a href="#" className="button button-dark text-light w-100 text-center bg-dark nott ls0 button-rounded button-xlarge noleftmargin"><i className="fa-solid fa-play"></i>Google Play</a>
                    </div>
                </div>
                </div>
            </div>
            <div id={`copyright`} className={`${bgLessDark}`}>
                <div className="container">
                    <div className="col-left row align-items-center justify-content-between col-mb-30">
                        <div className={`col-lg-auto text-center text-lg-start ${colorLessWhite}`}>
                            Copyrights © 2022 All Rights Reserved by GTT
                            <div className="copyright-links"><a className={`${colorLessWhite}`} href="#">Terms of Use</a> / <a className={`${colorLessWhite}`} href="#">Privacy Policy</a></div>
                        </div>
                        <div class="col-right col-lg-auto text-center text-lg-start">
                            <div class="copyrights-menu copyright-links m-0">
                                <a className={`${colorLessWhite}`} href="#">Home</a>/<a className={`${colorLessWhite}`} href="#">About</a>/<a className={`${colorLessWhite}`} href="#">Features</a>/<a className={`${colorLessWhite}`} href="#">Portfolio</a>/<a className={`${colorLessWhite}`} href="#">FAQs</a>/<a className={`${colorLessWhite}`} href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="gotoTop" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}  class="icon-angle-up rounded-circle"></div>
        </footer>
    );
}
  
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        darkmode: state.darkmode
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Footer);  