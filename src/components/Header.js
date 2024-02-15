import React from "react";
import { Link } from "react-router-dom";



function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="https://www.skrill.com/ru/" className="logo-link">
                        <img
                            src="https://www.skrill.com/fileadmin/Personal/promotions/skrill-ac-milan/ac-milan.PNG"
                            alt="AC Milan Logo"
                            className="logo-img"
                        />
                    </Link>
                    <div className="social-icons">
                        <Link to="https://www.facebook.com/ACMilan" className="social-icon-link">
                            <img src="https://cdn-icons-png.flaticon.com/128/4494/4494475.png" alt="Facebook Icon" className="social-icon" />
                        </Link>
                        <Link to="https://www.instagram.com/acmilan/?hl=en" className="social-icon-link">
                            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram Icon" className="social-icon" />
                        </Link>
                        <Link to="https://www.tiktok.com/@acmilan?language=en" className="social-icon-link">
                            <img src="https://cdn-icons-png.flaticon.com/128/1946/1946552.png" alt="TikTok Icon" className="social-icon" />
                        </Link>
                        <Link to="https://www.youtube.com/acmilan" className="social-icon-link">
                            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="YouTube Icon" className="social-icon" />
                        </Link>
                        <Link to="https://twitter.com/acmilan" className="social-icon-link">
                            <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="Twitter Icon" className="social-icon" />
                        </Link>
                        <Link to="https://www.linkedin.com/company/ac-milan" className="social-icon-link">
                            <img src="https://cdn-icons-png.flaticon.com/128/739/739270.png" alt="Twitter Icon" className="social-icon" />
                        </Link>
                        <Link to="https://www.acmilan.com/en/fans/ac-milan-music" className="social-icon-link">
                            <img src="https://cdn-icons-png.flaticon.com/128/5577/5577489.png" alt="Twitter Icon" className="social-icon" />
                        </Link>

                    </div>
                    <Link to="/" className="logo-text">AC Milan</Link>
                </div>
                <ul className="nav">
                    <li><Link to="/about" className="nav-link">Про клуб</Link></li>
                    <li><Link to="/team" className="nav-link">Основна команда</Link></li>
                    <li><Link to="/youth" className="nav-link">Молодіжна команда</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
