import React , {useContext , useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { TravelContext } from '../ContextAPI/TravelContext';
import BgVideo from '../Assets/Images/MainVideo.mp4'
const Home = () => {
    //get Activites Data from Statmangmet (Context)
    const {Avtivities , Events} = useContext(TravelContext);
    //state For responsive Carousel 
    const [Responsive , setResponsive ] = useState({
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        }
    );
    //function to hide video on mobile and show pic
    window.onresize = () => {
        let video = document.querySelector('video');
        window.pageXOffset < 770 ? video.style.display = 'none' : video.style.display = 'block';
    }
    return(
        <div className="Home">
            <div className="Header" id='#Header'>
                <video src={BgVideo} autoPlay loop></video>
                <div className="title">
                    <h1 className='wow fadeInUp' data-wow-delay='.2s'>DISCOVER</h1>
                    <h5 className='wow fadeInUp' data-wow-delay='.4s'>THE WORLD YOU HAVE NEVER SEEN</h5>
                </div>
                {/* End Slider */}
                {/* Start Search  */}
                <div className="Search wow fadeIn " data-wow-delay='.5s'>
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-2">
                            <div className="Duration">
                                <p>Find Your</p>
                                <h4>Destination</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="when">
                                <input type="text" disabled placeholder='When'/>
                                <span className='w-100 d-flex justify-content-center align-items-center'><i className="fas fa-calendar-week"></i></span>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="when">
                                <input type="text" placeholder='Destination'/>
                                <span className='w-100 d-flex justify-content-center align-items-center'><i className="fas fa-globe-europe"></i></span>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="when">
                                <input type="text" placeholder='Type'/>
                                <span className='w-100 d-flex justify-content-center align-items-center'><i className="fas fa-rocket"></i></span>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 mt-1 p-0 d-flex justify-content-center">
                            <button className="searchBtn">Search</button>
                        </div>
                    </div>
                </div>
                {/* End Search  */}
                <div className="bottombg"></div>
            </div>
            {/* Hotspots Activities  */}
            <section className="Activities" id='Hotspots'>
                <div className="container">
                    <h1 className='wow fadeInUp'>POPULAR ACTIVITIES</h1>
                    <p className='wow fadeInUp' data-wow-delay='.2s'>Favorite experiences booked by travelers</p>
                    <OwlCarousel
                        className='owl-theme responsiveClass'
                        items="4" 
                        autoplay={true} 
                        nav
                        margin={10}
                        dots={false}
                        loop={true}
                        responsive={Responsive}
                        >
                        {Avtivities.map((Act , i) => (
                            <div className="item wow fadeIn " data-wow-delay={'.'+i + 's'}>
                                <img src={Act.Img} alt=""/>
                                <div className="details">
                                    <h6>{Act.Title}</h6>
                                    <div className="rate d-flex justify-content-start align-items-center">
                                        <span className='stars'><i class="fas fa-star mr-1"></i>{Act.Stars}</span>
                                        <span className="reviews">( {Act.Reviews} Reviews )</span>
                                        <div className="Book">{Act.Ticket}K+ Booked</div>
                                    </div>
                                    <div className="price">
                                        EGP {Act.Price} <i className="fab fa-superpowers"></i>
                                    </div>
                                    <div className="date">
                                        {Act.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
            {/* End Activities  */}
            {/* Start Events section  */}
            <section className="Events" id='Events'>
                <div className="container">
                    <h1 className='wow fadeInUp'>Top Events</h1>
                    <p className='wow fadeInUp' data-wow-delay='.2s'>Favorite experiences booked by travelers</p>
                    <OwlCarousel
                        className='owl-theme'
                        items="4" 
                        autoplay={true} 
                        nav
                        margin={10}
                        dots={false}
                        loop={true}
                        responsive={Responsive}
                        >
                        {Events.map((Event , i) => (
                            <div className="item  wow fadeIn " data-wow-delay={'.'+i + 's'}>
                                <div className="title">
                                    <h6>{Event.Name}</h6>
                                    <img src={Event.Img} alt="Pic"/>
                                </div>
                                <div className="details">
                                    <p><i className="fas fa-calendar-week text-danger"></i> {Event.date}</p>
                                    <h6>{Event.Title}</h6>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
            {/* End Events Section */}
        </div>
    )
}
export default Home; 