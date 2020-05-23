import React from 'react'
import Play from '../Assets/Images/google-play.png';
import Store from '../Assets/Images/app-store.png';
import BellMan from '../Assets/Images/logo.png'
const Footer = () => {
    return(
        <section className="Footer  ">
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="logo wow fadeIn">
                            <img src={BellMan} alt="" width='40%'/>
                            <p>Discover Amazing Things</p>
                            <div className="Apps">
                                <img src={Play} alt="Google Play" width='35%' className='mr-2' />
                                <img src={Store} alt="appstore" width='35%' />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="link wow fadeIn" data-wow-delay='.2s'>
                            <h6>Company</h6>
                            <ul className='list-unstyled'>
                                <li>Link</li>
                                <li>Link</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="link wow fadeIn" data-wow-delay='.4s'>
                            <h6>Support</h6>
                            <ul className='list-unstyled'>
                                <li>Link</li>
                                <li>Link</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="contact wow fadeIn" data-wow-delay='.6s'>
                            <h6>Contact Us</h6>
                            <p className='m-0'>Email: Support@Example.com</p>
                            <p className='m-0'>Phone: +00000000</p>
                            <div className="social">
                                <i className="fab fa-facebook-f m-2"></i>
                                <i className="fab fa-twitter m-2"></i>
                                <i className="fab fa-instagram m-2"></i>
                                <i className="fab fa-youtube m-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;