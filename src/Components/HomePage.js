import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';
import ProfilePage from './ProfilePage';

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Container'>
            <header className='header'>
                <div className='logo'>WHAT'S NEXT</div>
                <nav className='menu'>
                    <button className="navbar-toggler" onClick={toggleMenu}>☰</button>
                    <ul className={isOpen ? 'open' : ''}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/standard">Standard Path</Link></li>
                        <li><Link to="/custom">Custom Path</Link></li>
                        <li><Link to="/login"><button>Login</button></Link></li>
                        <li><ProfilePage /></li>
                    </ul>
                </nav>
            </header>

            <main className='main'>
                <Container fluid>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img src="./assets/images/custom2.jpg" alt="" className="carousel-image" />
                            <Carousel.Caption>
                                <h3>Forge your own path, where creativity meets opportunity, and success becomes uniquely yours.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                            <img src="./assets/images/standard2.jpg" alt="" className="carousel-image" />
                            <Carousel.Caption>
                                <h3>a goal without a plan is just a wish</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>

                <div className="cards-container">
                    <div className='card'>
                        <div className='card-header' style={{ backgroundColor: "Orange" }}>
                            <h2>Standard Path</h2>
                        </div>
                        <div className='card-body'>
                            {/* <img src='./assets/images/custom2.jpg' alt="" className='w-100' /> */}
                            <img src='assets/images/custom.jpg' alt="" className='w-100' />
                        </div>
                        <p>Reach your goal...</p>
                        <h6><Link to="/read">Read more</Link></h6>
                    </div>

                    <div className='card'>
                        <div className='card-header' style={{ backgroundColor: "Orange" }}>
                            <h2>Custom Path</h2>
                        </div>
                        <div className='card-body'>
                            {/* <img src='./assets/images/standard2.jpg' alt="" className='w-100' /> */}
                            <img src='assets/images/standard4.jpg' alt="" className='w-100' />
                        </div>
                        <p>Set your goal...</p>
                        <h6><Link to="/read">Read more</Link></h6>
                    </div>
                </div>
            </main>

            <footer className='footer'>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                    <li className="bi bi-instagram"> Instagram</li>
                    <li className="bi bi-whatsapp"> WhatsApp</li>
                </ul>
            </footer>
        </div>
    );
}

export default HomePage;